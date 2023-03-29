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
  const [storage, setStorage] = useState<Data>(defaultValue);

  useEffect(() => {
    setStorage((prev) =>
      window.localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key) as string)
        : prev
    );
  }, [key]);

  function set(valueOrFunction: SetStateAction<Data>) {
    const value = isFunction(valueOrFunction)
      ? valueOrFunction(storage)
      : valueOrFunction;

    localStorage.setItem(key, JSON.stringify(value));
    setStorage(valueOrFunction);
  }

  return [storage, set];
}
