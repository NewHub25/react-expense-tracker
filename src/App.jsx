import Balance from "./components/balance";
import Header from "./components/header";
import TransactionForm from "./components/transactions/transaction-form";
import TransactionList from "./components/transactions/transaction-list";
import { GlobalProvider } from "./context/global-context";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1>Hello</h1>
    </GlobalProvider>
  );
}

export default App;
