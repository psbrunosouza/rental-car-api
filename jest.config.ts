import { compilerOptions } from "./tsconfig.json";

export default {
  bail: 0,
  clearMocks: true,
  coverageProvider: "v8",
  preset: 'ts-jest',
  testMatch: ["**/*.spec.ts"],
};
