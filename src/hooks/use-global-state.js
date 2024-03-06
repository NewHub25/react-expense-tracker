import { useContext } from "react";
import { Context } from "../context/global-context";

export default function useGlobalState() {
  const context = useContext(Context);

  return context;
}
