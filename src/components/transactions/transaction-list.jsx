import useGlobalState from "../../hooks/use-global-state";
import TransactionItem from "./transaction-item";

export default function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold">History</h3>
      <ul>
        {transactions.map((transaction) => {
          return (
            <TransactionItem key={transaction.id} transaction={transaction} />
          );
        })}
      </ul>
    </>
  );
}
