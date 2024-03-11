import { StateCreator, StoreMutatorIdentifier } from "zustand";
import { devtools } from "zustand/middleware";

export function initStore<T, Mos extends [StoreMutatorIdentifier, unknown][]>(
  fn: StateCreator<T, [["zustand/devtools", never]], Mos>
) {
  if (process.env.NODE_ENV === "production") {
    return fn;
  }
  return devtools<T, [], Mos>(fn, {
    name: "Zustand-Store"
  });
}
