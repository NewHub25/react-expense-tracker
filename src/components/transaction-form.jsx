import { useState } from "react";
import useGlobalState from "../hooks/use-global-state";

export default function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0.0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: 1,
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="0.00"
          step={0.01}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add transaction</button>
      </form>
    </section>
  );
}
