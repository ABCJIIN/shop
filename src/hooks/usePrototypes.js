import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototype() {
  const { prototypes } = useContext(AppStateContext);
  return prototypes;
}
