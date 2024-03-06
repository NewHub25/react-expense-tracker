import useGlobalState from "../hooks/use-global-state";
import toFloatNumber from "../logic/to-float-number";

export default function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const total = {
    income: 0,
    expense: 0,
  };
  transactions.forEach(({ amount }) => {
    total.income += amount > 0 ? amount : 0;
    total.expense += amount < 0 ? Math.abs(amount) : 0;
  });
  for (const key in total) {
    total[key] = toFloatNumber(total[key]);
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
