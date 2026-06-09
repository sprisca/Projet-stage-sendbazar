function NavButtons({ onPrev, onNext }) {
  return (
    <div>
      <button onClick={onPrev}>
        Précédent
      </button>

      <button
        onClick={onNext}
        style={{ marginLeft: "10px" }}
      >
        Suivant
      </button>
    </div>
  );
}

export default NavButtons;