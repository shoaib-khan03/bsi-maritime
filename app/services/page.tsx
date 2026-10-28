import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Logistics Services",
  description:
    "Explore BSI's industrial logistics, multimodal freight, customs clearance coordination, warehousing and project cargo capabilities.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <header className="hero ph">
        <div
          className="bg"
          style={{ backgroundPosition: "50% 50%" }}
          data-photo="/assets/logistics-service-hero.png"
        />
        <div className="wrap">
          <div className="mono fade">Services</div>
          <h1 data-split>Logistics Built Around Industrial Operations</h1>
          <p className="lead fade">
            Freight, border processes, storage and site delivery planned as one
            connected movement for complex industrial supply chains.
          </p>
        </div>
      </header>

      <section className="pg">
        <div className="wrap">
          <p className="lead catalog-intro">
            A coordinated logistics capability for routine supply, time-sensitive
            shipments and high-consequence project movements.
          </p>
          <div className="catalog-grid" aria-label="Services">
            <a
              className="catalog-card"
              href="/services/logistics-heavy-transport"
              aria-label="Integrated Logistics and Project Cargo"
            >
              <span className="catalog-index mono">01</span>
              <h2>Integrated Logistics &amp; Project Cargo</h2>
              <p>
                Multimodal freight, customs coordination, managed storage and
                engineered transport for industrial cargo.
              </p>
              <p className="catalog-count">8 service capabilities</p>
              <span className="catalog-action">View service details</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
