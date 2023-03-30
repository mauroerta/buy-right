import { Dispatch, SetStateAction, useEffect, useState } from "react";

type UseLocalStorageOptions<Data> = {
  defaultValue: Data;
};

type UseLocalStorageReturn<Data> = [Data, Dispatch<SetStateAction<Data>>];

function isFunction(
  valueOrFunction: unknown | Function
): valueOrFunction is Function {
  return typeof valueOrFunction === "function";
}

export function useLocalStorage<Data>(
  key: string,
  { defaultValue }: UseLocalStorageOptions<Data>
): UseLocalStorageReturn<Data> {
  const [state, setState] = useState<Data>(defaultValue);

  useEffect(() => {
    const storage = window.localStorage.getItem(key);
    setState((prev) => (storage ? JSON.parse(storage) : prev));
  }, [key]);

  function setter(valueOrFunction: SetStateAction<Data>) {
    const value = isFunction(valueOrFunction)
      ? valueOrFunction(state)
      : valueOrFunction;

    localStorage.setItem(key, JSON.stringify(value));
    setState(valueOrFunction);
  }

  return [state, setter];
}
