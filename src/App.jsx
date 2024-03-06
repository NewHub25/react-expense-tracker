import Balance from "./components/balance";
import Header from "./components/header";
import TransactionForm from "./components/transaction-form";
import { GlobalProvider } from "./context/global-context";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>Hello</h1>
    </GlobalProvider>
  );
}

export default App;
