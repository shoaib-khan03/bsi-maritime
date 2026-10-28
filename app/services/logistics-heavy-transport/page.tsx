import type { Metadata } from "next";

const title = "Integrated Logistics, Freight & Project Cargo";
const description =
  "Industrial freight forwarding, sea and air freight, road transport, customs clearance coordination, warehousing and project cargo planning from Black Sands Industries.";
const canonical = "/services/logistics-heavy-transport";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title: `${title} | Black Sands Industries`,
    description,
    url: canonical,
    siteName: "Black Sands Industries",
    type: "website",
    images: [
      {
        url: "/assets/logistics-service-hero.png",
        alt: "Industrial logistics and project cargo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Black Sands Industries`,
    description,
    images: ["/assets/logistics-service-hero.png"],
  },
};

const capabilities = [
  {
    title: "Multimodal Freight Management",
    summary:
      "One movement plan links collection, international freight, border touchpoints and the final industrial delivery. Mode selection follows cargo dimensions, urgency, route constraints and the receiving site's operating window.",
    image: "/assets/logistics-logistics-service.png",
    points: [
      "Shipment planning and coordination across sea, air and road legs.",
      "Booking, cargo handover and document milestones aligned between service partners.",
      "Consolidation and delivery sequencing matched to project demand.",
    ],
  },
  {
    title: "Sea Freight",
    summary:
      "Ocean movements are structured around cargo volume, port access and the required arrival sequence, from containerized consignments through break-bulk and heavy industrial loads.",
    image: "/assets/logistic-industry-support.jpg",
    points: [
      "Full-container and shared-container shipment coordination.",
      "Break-bulk and out-of-gauge cargo planning with port and handling interfaces.",
      "Sailing schedules, origin and destination handovers, and onward delivery planning.",
    ],
  },
  {
    title: "Air Freight",
    summary:
      "For urgent spares, controlled replenishment and time-critical project needs, air movements can shorten transit while keeping cargo documentation and onward handling in view.",
    image: "/assets/logistics-logistics-service.png",
    points: [
      "Express, priority and consolidated routing options coordinated to shipment needs.",
      "Consignment preparation and handover milestones organized with the air-cargo partners.",
      "Arrival, clearance and final-mile interfaces considered before dispatch.",
    ],
  },
  {
    title: "Road Transport",
    summary:
      "Road movements connect ports, airports, storage facilities and operating sites, with equipment and route planning selected for the load and its destination.",
    image: "/assets/logistics-equipment-service.png",
    points: [
      "Flatbed, low-bed and multi-axle transport options coordinated to cargo profile.",
      "Route and site-access checks, permits and escort requirements planned where applicable.",
      "Delivery slots, unloading readiness and proof-of-delivery records coordinated.",
    ],
  },
  {
    title: "Customs & Trade Coordination",
    summary:
      "Clear, complete shipment records help reduce avoidable border delays. BSI coordinates documentation and clearance interfaces with the client and authorized customs representatives.",
    image: "/assets/logistics-logistics-service.png",
    points: [
      "Document completeness checks for invoices, packing details and transport records.",
      "Declaration and release milestones coordinated with authorized customs brokers.",
      "Importer-provided classification, origin and valuation information tracked through the shipment.",
    ],
  },
  {
    title: "Warehousing & Inventory",
    summary:
      "Storage is planned as part of the movement, so materials can be received, identified, held and released against project or operating requirements.",
    image: "/assets/logistics-cranes-service.png",
    points: [
      "Goods receipt, condition checks, inventory records and stock-status visibility.",
      "Order picking, consolidation, staging and dispatch coordination.",
      "Laydown or specialist storage arranged to suit the cargo and facility capability.",
    ],
  },
  {
    title: "Project Cargo & Heavy Transport",
    summary:
      "Oversized and high-value cargo benefits from early engineering input. Lift interfaces, route constraints and site readiness are considered before equipment and delivery dates are committed.",
    image: "/assets/logistics-heavy-service.png",
    points: [
      "Load dimensions, weight, route feasibility and delivery access reviewed during planning.",
      "Heavy-haul equipment, modular trailers and lifting interfaces coordinated to the move.",
      "Permit, escort, rigging and site handover activities sequenced with project teams.",
    ],
  },
  {
    title: "Shipment Control & Site Delivery",
    summary:
      "Operational teams need more than a departure date. BSI keeps shipment status, handoffs and site interfaces visible so emerging issues can be addressed with the right stakeholders.",
    image: "/assets/logistics-cranes-service.png",
    points: [
      "Milestone updates across collection, transit, clearance, storage and delivery.",
      "Exception escalation for document gaps, route changes or receiving constraints.",
      "Delivery records and close-out information aligned with project requirements.",
    ],
  },
];

export default function LogisticsPage() {
  return (
    <main>
      <header className="hero ph catalog-detail-hero">
        <div
          className="bg"
          style={{ backgroundPosition: "50% 50%" }}
          data-photo="/assets/logistics-service-hero.png"
        />
        <div className="wrap">
          <a className="catalog-back" href="/services">
            Back to Services
          </a>
          <div className="mono fade">Services</div>
          <h1 data-split>Integrated Logistics &amp; Project Cargo</h1>
          <p className="lead fade">
            From routine freight to complex industrial movements, BSI aligns
            transport modes, border processes, storage and site interfaces in a
            single, engineered delivery plan.
          </p>
        </div>
      </header>

      <div>
        {capabilities.map((capability, index) => (
          <section
            className={`pg tech-section catalog-detail-section${index % 2 ? " catalog-detail-section--reverse" : ""}`}
            key={capability.title}
          >
            <div className="wrap">
              <div className="catalog-detail-layout">
                <div className="catalog-detail-copy">
                  <div className="mono rv">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span> / </span>
                    <span>Services</span>
                  </div>
                  <h3 className="rv">{capability.title}</h3>
                  <p className="lead rv">{capability.summary}</p>
                  <ul className="catalog-detail-points bl">
                    {capability.points.map((point) => (
                      <li className="rv" key={point}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className="catalog-detail-image"
                  src={capability.image}
                  alt={capability.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
