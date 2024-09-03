import { StateCreator, StoreMutatorIdentifier } from "zustand";
import { devtools } from "zustand/middleware";

export function initStore<T, Mps extends [StoreMutatorIdentifier, unknown][], Mos extends [StoreMutatorIdentifier, unknown][]>(
  fn: StateCreator<T, [...Mps, ["zustand/devtools", never]], Mos>
) {
  if (process.env.NODE_ENV === "production") {
    return fn;
  }
  return devtools<T, Mps, Mos>(fn, {
    name: "Zustand-Store"
  });
}
