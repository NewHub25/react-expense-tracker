import useGlobalState from "../hooks/use-global-state";

export default function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = {
    income: 0,
    expense: 0,
  };
  amounts.forEach((amount) => {
    total.income += amount > 0 ? amount : 0;
    total.expense += amount < 0 ? Math.abs(amount) : 0;
  });
  for (const key in total) {
    total[key] = Number(total[key].toFixed(2));
  }

  return (
    <>
      <article className="flex justify-between my-2">
        <h3>Income</h3>
        <p>{total.income}</p>
      </article>
      <article className="flex justify-between my-2">
        <h3>Expense</h3>
        <p>{total.expense}</p>
      </article>
    </>
  );
}
