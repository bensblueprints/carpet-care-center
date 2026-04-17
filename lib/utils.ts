import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS = {
  name: "Carpet Care Center Inc.",
  shortName: "Carpet Care Center",
  owner: "Kurt Holsinger",
  cert: "IICRC Master Textile Technician #6256",
  founded: 1965,
  certSince: 1989,
  phone: "949.581.8726",
  phoneHref: "tel:1-949-581-8726",
  address: "23632 Via Fabricante, Suite C",
  city: "Mission Viejo",
  state: "CA",
  zip: "92691",
  hours: "Monday – Friday, 9:00am – 5:00pm",
  email: "info@carpetcarecenter.com",
  tagline: "Refresh. Revitalize. Restore.",
  serviceArea: [
    "Mission Viejo",
    "Irvine",
    "Lake Forest",
    "Laguna Hills",
    "Laguna Niguel",
    "Rancho Santa Margarita",
    "Aliso Viejo",
    "Saddleback Valley",
  ],
};
