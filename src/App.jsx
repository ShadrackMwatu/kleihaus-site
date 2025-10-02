export default function App() {
  return (
    <main className="container" style={{maxWidth: 1100, margin: "0 auto", padding: 24}}>
      {/* Clear, single H1 for the page */}
      <h1 style={{fontSize: 36, lineHeight: 1.2, marginBottom: 16}}>
        Kleihaus Ceramics — Tiles, Sanitaryware, Paints
      </h1>

      <p style={{color: "#6b7280", marginBottom: 16}}>
        Explore durable floor & wall tiles, WC sets, basins, mixers, and premium paints for homes and commercial spaces in Kenya.
      </p>

      {/* Example image with descriptive alt text (replace src with a real file in /public/images/) */}
      <img
        src="/images/og-cover.jpg"
        alt="Showroom display of ceramic wall and floor tiles with sanitaryware sets at Kleihaus Ceramics"
        style={{width: "100%", borderRadius: 12, border: "1px solid #e5e7eb", margin: "12px 0 24px"}}
      />

      {/* Your existing sections/components can follow here */}
    </main>
  );
}
