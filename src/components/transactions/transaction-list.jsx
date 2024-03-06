import useGlobalState from "../../hooks/use-global-state";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <ul>
      {transactions.map(({ description, amount, id }) => {
        return (
          <li key={id}>
            <p>{description}</p>
            <span>{amount}</span>
            <button onClick={() => deleteTransaction(id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}
