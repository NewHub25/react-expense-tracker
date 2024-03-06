import Balance from "./components/balance";
import ExpenseChart from "./components/expense-chart";
import Header from "./components/header";
import IncomeExpenses from "./components/income-expenses";
import TransactionForm from "./components/transactions/transaction-form";
import TransactionList from "./components/transactions/transaction-list";
import { GlobalProvider } from "./context/global-context";

function App() {
  return (
    <GlobalProvider>
      <main className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <section className="container mx-auto w-3/6">
          <section className="bg-zinc-800 p-10 rounded-lg flex gap-x-4">
            <article>
              <h1 className="capitalize text-4xl font-bold">Expense tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </article>
            <aside className="w-full flex flex-col">
              <ExpenseChart />
              <TransactionList />
            </aside>
          </section>
        </section>
      </main>
    </GlobalProvider>
  );
}

export default App;
