import Balance from "./components/balance";
import Header from "./components/header";
import IncomeExpenses from "./components/income-expenses";
import TransactionForm from "./components/transactions/transaction-form";
import TransactionList from "./components/transactions/transaction-list";
import { GlobalProvider } from "./context/global-context";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1>Hello</h1>
    </GlobalProvider>
  );
}

export default App;
