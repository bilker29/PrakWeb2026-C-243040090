function ItemTugas({ tugas, onUbahStatus, onHapus }) {
  return (
    <li className={`item ${tugas.selesai ? 'item-selesai' : ''} anim-slide`}>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={tugas.selesai}
        onChange={() => onUbahStatus(tugas.id)}
      />
      <span className={tugas.selesai ? 'selesai' : ''}>{tugas.judul}</span>
      <button
        type="button"
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(tugas.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTugas;
