import { VictoryLabel, VictoryPie } from "victory";
import useGlobalState from "../hooks/use-global-state";
import toFloatNumber from "../logic/to-float-number";

export default function ExpenseChart() {
  const { transactions } = useGlobalState();

  const total = {
    income: 0,
    expense: 0,
    percentages: {
      income: 0,
      expense: 0,
    },
  };
  transactions.forEach(({ amount }) => {
    total.income += amount > 0 ? amount : 0;
    total.expense += amount < 0 ? Math.abs(amount) : 0;
  });
  for (const keyPer in total.percentages) {
    total.percentages[keyPer] =
      (total[keyPer] * 100) / (total.income + total.expense);
  }
  for (const p in total.percentages) {
    total.percentages[p] = toFloatNumber(total.percentages[p]);
  }

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: `${total.percentages.expense}%` },
        { x: "Incomes", y: `${total.percentages.income}%` },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => datum.y}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
}
