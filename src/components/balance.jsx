import useGlobalState from "../hooks/use-global-state";

export default function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = Number(
    amounts.reduce((total, amount) => total + amount, 0).toFixed(2)
  );

  return (
    <nav className="flex justify-between">
      <h2>Balance</h2>
      <p className="text-2xl font-bold">${total}</p>
    </nav>
  );
}
