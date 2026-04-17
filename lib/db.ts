import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const dir =
  process.env.DATA_DIR ||
  (process.env.NODE_ENV === "production" ? "/app/data" : path.join(process.cwd(), "data"));

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

export const db = new Database(path.join(dir, "leads.db"));

db.pragma("journal_mode = WAL");

db.exec(`CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  preferred_date TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME
)`);
