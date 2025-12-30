export default function Hero({ listing }: { listing: any }) {
    return (
      <section className="section">
        <div className="card">
          <h1>{listing.title}</h1>
          <p className="text-muted">
            {listing.sector}, {listing.city}
          </p>
  
          <h2 style={{ color: "var(--color-primary)" }}>
            ₹ {listing.priceFrom.toLocaleString()} Onwards
          </h2>
  
          <button className="btn btn-primary">
            Enquire Now
          </button>
        </div>
      </section>
    );
  }
  