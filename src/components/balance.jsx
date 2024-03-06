import useGlobalState from "../hooks/use-global-state";

export default function Balance() {
  const data = useGlobalState();

  return (
    <nav>
      <h1>Balance</h1>
      <span>{JSON.stringify(data)}</span>
    </nav>
  );
}
