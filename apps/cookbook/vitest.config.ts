import { defineConfig } from "vite";

export default defineConfig({
  test: {
    setupFiles: ["/tests/setup.ts"],
    poolOptions: {
      threads: {
        maxThreads: 1,
        minThreads: 1,
      }
    }
  },
});
