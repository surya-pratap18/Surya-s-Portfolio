const API = import.meta.env.VITE_API_URL || "";
export async function getPortfolio() {
  try {
    const r = await fetch(`${API}/api/portfolio`);
    if (!r.ok) throw new Error("API unavailable");
    return await r.json();
  } catch {
    return null;
  }
}
