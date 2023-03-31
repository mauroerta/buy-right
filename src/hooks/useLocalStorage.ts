import {
  Dispatch,
  useEffect,
  SetStateAction,
  useSyncExternalStore,
} from "react";

type UseLocalStorageOptions<Data> = {
  defaultValue: Data;
};

type UseLocalStorageReturn<Data> = [Data, Dispatch<SetStateAction<Data>>];

function isFunction(
  valueOrFunction: unknown | Function
): valueOrFunction is Function {
  return typeof valueOrFunction === "function";
}

function createStorage() {
  const store = new Map<string, any>();
  const listeners = new Map<string, Set<() => void>>();

  function init(key: string) {
    const state = window.localStorage.getItem(key);
    if (state) {
      set(key, JSON.parse(state));
    }
  }

  function getSnapshot<V>(key: string, defaultValues?: V) {
    if (!store.has(key)) {
      store.set(key, defaultValues);
    }

    return store.get(key);
  }

  function notify(key: string) {
    const keyListeners = listeners.get(key);

    if (!keyListeners) {
      return null;
    }

    keyListeners.forEach((listener) => listener());
  }

  function subscribe(key: string, onStateChange: () => void) {
    const keyListeners = listeners.get(key) || new Set();
    keyListeners.add(onStateChange);

    listeners.set(key, keyListeners);

    return () => {
      keyListeners.delete(onStateChange);
    };
  }

  function set<V>(key: string, value: V) {
    store.set(key, value);
    window.localStorage.setItem(key, JSON.stringify(value));
    notify(key);
  }

  return { init, set, subscribe, getSnapshot };
}

const storage = createStorage();

export function useLocalStorage<Data>(
  key: string,
  options?: UseLocalStorageOptions<Data>
): UseLocalStorageReturn<Data> {
  const state = useSyncExternalStore<Data>(
    (onStateChange) => storage.subscribe(key, onStateChange),
    () => storage.getSnapshot(key, options?.defaultValue),
    () => storage.getSnapshot(key, options?.defaultValue)
  );

  useEffect(() => {
    window.setTimeout(() => storage.init(key), 100);
  }, [key]);

  function setter(valueOrFunction: SetStateAction<Data>) {
    const value = isFunction(valueOrFunction)
      ? valueOrFunction(state)
      : valueOrFunction;

    storage.set(key, value);
  }

  return [state, setter];
}
