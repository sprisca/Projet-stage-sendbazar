import { useState } from "react";
import { cards } from "./Data/cards.js";

import Flashcard from "./components/flashcard";
import NavButtons from "./components/navbuttons";
import ProgressBar from "./components/progressBar";

import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
    setIsFlipped(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Flashcard App</h1>

      <Flashcard
        card={cards[currentIndex]}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />

      <NavButtons
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <ProgressBar
        current={currentIndex + 1}
        total={cards.length}
      />
    </div>
  );
}

export default App;