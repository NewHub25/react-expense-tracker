import { useState } from "react";
import useGlobalState from "../../hooks/use-global-state";

export default function TransactionForm() {
  // si se controla el input, no se puede digitar el símbolo negativo
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0.0);

  const handleSubmit = (e) => {
    if (amount === 0) return;
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount,
    });
    console.log({ description, amount });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          autoFocus
        />
        <input
          type="number"
          placeholder="0.00"
          step={0.01}
          min={-1000_000}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <button>Add transaction</button>
      </form>
    </section>
  );
}
