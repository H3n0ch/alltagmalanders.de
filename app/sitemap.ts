import { MetadataRoute } from "next";

const BASE_URL = "https://alltagmalanders.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date("2026-06-09"), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/mietpreise-deutschland-alternativen`, lastModified: new Date("2026-06-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cohousing-gemeinschaftlich-wohnen`, lastModified: new Date("2026-06-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hausboote-als-wohnform`, lastModified: new Date("2026-06-12"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/naturlandschaften-deutschland`, lastModified: new Date("2026-06-09"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/waldbaden-shinrin-yoku`, lastModified: new Date("2026-06-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/klassische-immobilie-oder-alternative-wohnform-2026`, lastModified: new Date("2026-06-02"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/van-life-mobiles-wohnen`, lastModified: new Date("2026-06-02"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tiny-house-steuern-sparen`, lastModified: new Date("2026-06-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tiny-house-kosten-bauen`, lastModified: new Date("2026-05-29"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/frugal-living-sparen-alltag`, lastModified: new Date("2026-05-26"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tiny-houses-als-kapitalanlage`, lastModified: new Date("2026-05-24"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/nachhaltiger-lebensstil-2026`, lastModified: new Date("2026-05-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/minimalismus-im-alltag`, lastModified: new Date("2026-05-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ueber-uns`, lastModified: new Date("2026-06-09"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/impressum`, lastModified: new Date("2026-05-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/datenschutz`, lastModified: new Date("2026-05-01"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
