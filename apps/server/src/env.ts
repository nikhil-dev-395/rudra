import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["DEV", "PROD"]),
  PORT: z.string().default("3000"),
  APP_NAME: z.string().default("Rudra"),
  MORGAN_LEVEL: z.string().default("dev"),
});

const env = envSchema.parse(process.env);
export { env };
