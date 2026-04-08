export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Node.js 22 exposes `localStorage` globally when --localstorage-file is passed,
    // but if the path contains spaces (as in this project) the flag is silently
    // truncated and the resulting object has no working methods.
    // Replace it with an in-memory shim so SSR never throws.
    if (typeof localStorage !== 'undefined' && typeof localStorage.getItem !== 'function') {
      const store = new Map<string, string>()
      Object.defineProperty(globalThis, 'localStorage', {
        value: {
          getItem: (key: string) => store.get(key) ?? null,
          setItem: (key: string, value: string) => store.set(key, String(value)),
          removeItem: (key: string) => { store.delete(key) },
          clear: () => { store.clear() },
          key: (index: number) => Array.from(store.keys())[index] ?? null,
          get length() { return store.size },
        },
        writable: true,
        configurable: true,
      })
    }
  }
}
