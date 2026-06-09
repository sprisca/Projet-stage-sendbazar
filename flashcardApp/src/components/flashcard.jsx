function Flashcard({ card, isFlipped, onFlip }) {
  return (
    <div
      onClick={onFlip}
      style={{
        width: "300px",
        height: "180px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "20px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "28px",
      }}
    >
      {isFlipped ? card.en : card.fr}
    </div>
  );
}

export default Flashcard;