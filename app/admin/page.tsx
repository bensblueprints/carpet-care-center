"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar, CheckCircle2, Clock, Download, Inbox, LogOut, Mail, MapPin,
  Phone, RefreshCw, Search, Trash2, X,
} from "lucide-react";

type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date?: string;
  message?: string;
  status: "new" | "contacted" | "booked" | "lost" | "deleted";
  notes?: string;
};

const STATUSES: Lead["status"][] = ["new", "contacted", "booked", "lost"];

const statusStyles: Record<Lead["status"], string> = {
  new: "bg-blue-100 text-blue-800 border-blue-200",
  contacted: "bg-amber-100 text-amber-800 border-amber-200",
  booked: "bg-emerald-100 text-emerald-800 border-emerald-200",
  lost: "bg-gray-100 text-gray-700 border-gray-200",
  deleted: "bg-red-50 text-red-700 border-red-200",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<Lead["status"] | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Lead | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? sessionStorage.getItem("ccc_admin_pw") : null;
    if (stored) {
      setPassword(stored);
      setAuthed(true);
    }
  }, []);

  const fetchLeads = useCallback(async (pw: string) => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/leads", {
        headers: { "x-admin-password": pw },
      });
      if (!res.ok) {
        if (res.status === 401) throw new Error("Incorrect password");
        throw new Error("Failed to load leads");
      }
      const data = await res.json();
      setLeads(Array.isArray(data.leads) ? data.leads : []);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Failed");
      if (e instanceof Error && e.message === "Incorrect password") {
        setAuthed(false);
        sessionStorage.removeItem("ccc_admin_pw");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetchLeads(password);
    const t = setInterval(() => fetchLeads(password), 60_000);
    return () => clearInterval(t);
  }, [authed, password, fetchLeads]);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/leads", {
      headers: { "x-admin-password": password },
    });
    setLoading(false);
    if (res.ok) {
      sessionStorage.setItem("ccc_admin_pw", password);
      setAuthed(true);
      setErr(null);
    } else {
      setErr("Incorrect password");
    }
  };

  const updateLead = async (id: string, patch: Partial<Lead>) => {
    await fetch("/api/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ id, ...patch }),
    });
    await fetchLeads(password);
    setSelected((s) => (s && s.id === id ? { ...s, ...patch } : s));
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Delete this lead? (soft-delete)")) return;
    await fetch("/api/leads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify({ id }),
    });
    setSelected(null);
    fetchLeads(password);
  };

  const visible = useMemo(() => {
    return leads
      .filter((l) => l.status !== "deleted")
      .filter((l) => filter === "all" || l.status === filter)
      .filter((l) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return [l.name, l.email, l.phone, l.service].join(" ").toLowerCase().includes(q);
      })
      .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
  }, [leads, filter, query]);

  const stats = useMemo(() => {
    const alive = leads.filter((l) => l.status !== "deleted");
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return {
      total: alive.length,
      thisWeek: alive.filter((l) => +new Date(l.createdAt) > weekAgo).length,
      contacted: alive.filter((l) => l.status === "contacted").length,
      booked: alive.filter((l) => l.status === "booked").length,
    };
  }, [leads]);

  const exportCSV = () => {
    const headers = ["id", "createdAt", "name", "email", "phone", "service", "date", "status", "notes", "message"];
    const rows = visible.map((l) =>
      headers.map((h) => `"${String((l as unknown as Record<string, unknown>)[h] ?? "").replace(/"/g, '""')}"`).join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `carpet-care-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream p-6">
        <form onSubmit={onLogin} className="w-full max-w-md rounded-card bg-white shadow-warm-lg p-8 border border-black/5">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-cream">
              <Image src="/images/carpet-care-center-inc-logo.avif" alt="logo" fill sizes="48px" className="object-contain p-1" />
            </div>
            <div>
              <div className="font-display text-xl text-brand">Admin Portal</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">Carpet Care Center</div>
            </div>
          </div>
          <label className="mt-8 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted" htmlFor="pw">
            Password
          </label>
          <input
            id="pw"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="input-field mt-1.5"
          />
          {err && <div className="mt-3 text-sm text-brand">{err}</div>}
          <button type="submit" disabled={loading} className="btn-primary mt-6 w-full">
            {loading ? "Checking..." : "Sign In"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="sticky top-0 z-40 border-b border-brand/10 bg-cream/90 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
              <Image src="/images/carpet-care-center-inc-logo.avif" alt="logo" fill sizes="40px" className="object-contain p-1" />
            </div>
            <div>
              <div className="font-display text-lg text-brand leading-none">Admin Dashboard</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mt-1">
                Leads & Bookings
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => fetchLeads(password)} className="rounded-full border border-brand/20 p-2 text-brand hover:bg-brand hover:text-cream transition-colors" aria-label="Refresh">
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button onClick={exportCSV} className="hidden sm:inline-flex items-center gap-2 rounded-full border border-brand/20 px-4 py-2 text-xs font-semibold text-brand hover:bg-brand hover:text-cream transition-colors">
              <Download className="h-3.5 w-3.5" /> Export CSV
            </button>
            <button
              onClick={() => { sessionStorage.removeItem("ccc_admin_pw"); setAuthed(false); setPassword(""); }}
              className="inline-flex items-center gap-2 rounded-full bg-brand text-cream px-4 py-2 text-xs font-semibold hover:bg-brand-dark transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Leads", value: stats.total, icon: Inbox, tone: "bg-brand/5 text-brand" },
            { label: "New This Week", value: stats.thisWeek, icon: Calendar, tone: "bg-blue-50 text-blue-700" },
            { label: "Contacted", value: stats.contacted, icon: Clock, tone: "bg-amber-50 text-amber-700" },
            { label: "Booked", value: stats.booked, icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-700" },
          ].map((s) => (
            <div key={s.label} className="rounded-card bg-white border border-black/5 shadow-warm-sm p-5">
              <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${s.tone}`}>
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-3 font-display text-3xl text-ink leading-none">{s.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-card bg-white border border-black/5 shadow-warm-sm">
          <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 border-b border-black/5">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, phone, service..."
                className="w-full rounded-full border border-black/10 bg-cream/50 pl-10 pr-4 py-2 text-sm focus:border-brand focus:outline-none focus:shadow-[0_0_0_3px_rgba(107,31,42,0.1)]"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(["all", ...STATUSES] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                    filter === s ? "bg-brand text-cream" : "bg-cream text-ink-muted hover:bg-brand/10"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                <tr className="border-b border-black/5">
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold">Contact</th>
                  <th className="px-5 py-3 font-semibold">Service</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {visible.map((l) => (
                  <tr key={l.id} className="hover:bg-cream/60 cursor-pointer transition-colors" onClick={() => setSelected(l)}>
                    <td className="px-5 py-3 text-ink-muted whitespace-nowrap">
                      {new Date(l.createdAt).toLocaleDateString()}
                      <div className="text-[10px]">{new Date(l.createdAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</div>
                    </td>
                    <td className="px-5 py-3 font-semibold text-ink">{l.name}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2 text-xs text-ink-muted">
                        <Phone className="h-3 w-3" /> {l.phone}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-ink-muted mt-0.5">
                        <Mail className="h-3 w-3" /> {l.email}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-ink-muted">{l.service}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${statusStyles[l.status]}`}>
                        {l.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteLead(l.id); }}
                        className="text-ink-muted hover:text-brand transition-colors"
                        aria-label="Delete lead"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {visible.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-16 text-center text-ink-muted">
                      {loading ? "Loading..." : "No leads yet. Submissions from the website will appear here."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="md:hidden divide-y divide-black/5">
            {visible.map((l) => (
              <button key={l.id} onClick={() => setSelected(l)} className="w-full text-left p-4 hover:bg-cream/60 transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-semibold text-ink">{l.name}</div>
                  <span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${statusStyles[l.status]}`}>
                    {l.status}
                  </span>
                </div>
                <div className="mt-1 text-xs text-ink-muted">{l.service}</div>
                <div className="mt-2 flex gap-3 text-xs text-ink-muted">
                  <span>{new Date(l.createdAt).toLocaleDateString()}</span>
                  <span>{l.phone}</span>
                </div>
              </button>
            ))}
            {visible.length === 0 && (
              <div className="p-10 text-center text-ink-muted text-sm">
                {loading ? "Loading..." : "No leads yet."}
              </div>
            )}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
          >
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl bg-white rounded-t-card md:rounded-card shadow-warm-lg max-h-[92vh] overflow-y-auto"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/5 bg-white p-5">
                <div>
                  <div className="font-display text-xl text-ink">{selected.name}</div>
                  <div className="text-xs text-ink-muted">
                    Submitted {new Date(selected.createdAt).toLocaleString()}
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="rounded-full border border-black/10 p-2 hover:bg-cream">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-5 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <a href={`tel:${selected.phone}`} className="flex items-center gap-2 rounded-lg bg-cream/80 px-3 py-2 text-sm hover:bg-brand hover:text-cream transition-colors">
                    <Phone className="h-4 w-4" /> {selected.phone}
                  </a>
                  <a href={`mailto:${selected.email}`} className="flex items-center gap-2 rounded-lg bg-cream/80 px-3 py-2 text-sm hover:bg-brand hover:text-cream transition-colors">
                    <Mail className="h-4 w-4" /> <span className="truncate">{selected.email}</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-ink-muted">Service</div>
                    <div className="mt-1 text-ink">{selected.service}</div>
                  </div>
                  {selected.date && (
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-ink-muted flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Preferred Date
                      </div>
                      <div className="mt-1 text-ink">{selected.date}</div>
                    </div>
                  )}
                </div>

                {selected.message && (
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-ink-muted">Message</div>
                    <p className="mt-2 rounded-lg bg-cream/60 p-3 text-sm text-ink leading-relaxed">{selected.message}</p>
                  </div>
                )}

                <div>
                  <label className="text-[10px] uppercase tracking-[0.18em] text-ink-muted" htmlFor="status">
                    Status
                  </label>
                  <select
                    id="status"
                    value={selected.status}
                    onChange={(e) => updateLead(selected.id, { status: e.target.value as Lead["status"] })}
                    className="input-field mt-1.5"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.18em] text-ink-muted" htmlFor="notes">
                    Internal Notes
                  </label>
                  <textarea
                    id="notes"
                    defaultValue={selected.notes || ""}
                    onBlur={(e) => updateLead(selected.id, { notes: e.target.value })}
                    rows={4}
                    className="input-field mt-1.5 resize-none"
                    placeholder="Add call notes, next steps, pricing quoted..."
                  />
                  <div className="mt-1 text-[11px] text-ink-muted">Auto-saves on blur.</div>
                </div>

                <div className="pt-3 border-t border-black/5 flex justify-between items-center">
                  <button
                    onClick={() => deleteLead(selected.id)}
                    className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand-dark"
                  >
                    <Trash2 className="h-4 w-4" /> Delete lead
                  </button>
                  <button onClick={() => setSelected(null)} className="btn-secondary py-2 px-5 text-xs">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
