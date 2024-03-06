import useGlobalState from "../../hooks/use-global-state";

export default function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  const { description, amount, id } = transaction;

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{description}</p>
      <span>
        ${amount}
        <button onClick={() => deleteTransaction(id)}>x</button>
      </span>
    </li>
  );
}
