import coreWebVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const config = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...nextTs,
  {
    settings: { react: { version: "19.3.0" } },
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
]

export default config
