import useGlobalState from "../hooks/use-global-state";

export default function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = Number(
    amounts.reduce((total, amount) => total + amount, 0).toFixed(2)
  );

  return (
    <nav>
      <h2>Balance</h2>
      <h3>${total}</h3>
    </nav>
  );
}
