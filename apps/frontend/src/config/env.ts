type Env = "dev" | "prod";

const ENVIRONMENTS: Record<Env, string> = {
  dev: "http://localhost:3000",
  prod: "https://lightpay-production.up.railway.app",
};

const currentEnv = (import.meta.env.VITE_ENV as Env) || "dev";

export const API_URL = ENVIRONMENTS[currentEnv];
