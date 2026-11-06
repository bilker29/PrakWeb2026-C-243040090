function Kartu({ judul, badge, children }) {
  return (
    <section className="kartu">
      <div className="kartu-header">
        <h2 className="kartu-judul">{judul}</h2>
        {badge && <span className="kartu-badge">{badge}</span>}
      </div>
      {children}
    </section>
  );
}

export default Kartu;
