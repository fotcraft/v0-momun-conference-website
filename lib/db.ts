import { neon } from '@neondatabase/serverless'

export const sql = neon(process.env.DATABASE_URL!)

export const committees = [
  { value: "ga1", label: "GA 1 - Disarmament and International Security" },
  { value: "ga3", label: "GA 3 - Social, Humanitarian and Cultural Affairs" },
  { value: "ga4", label: "GA 4 - Special Political and Decolonization" },
  { value: "ga6", label: "GA 6 - Legal Affairs" },
  { value: "ecosoc", label: "ECOSOC - Economic and Social Council" },
  { value: "sc", label: "Security Council" },
  { value: "who", label: "WHO - World Health Organization" },
  { value: "wb", label: "World Bank" },
  { value: "unesco", label: "UNESCO" },
]
