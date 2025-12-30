export default function Amenities({ items }: { items: string[] }) {
    return (
      <section className="section">
        <div className="card">
          <h2>Amenities</h2>
          <ul>
            {items.map(item => (
              <li key={item}>✔ {item}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  