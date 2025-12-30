export function Location({ address }: { address: string }) {
    return (
      <section className="section">
        <div className="card">
          <h2>Location</h2>
          <p>{address}</p>
        </div>
      </section>
    );
  }
  