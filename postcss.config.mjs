import postcssPresetEnv from "postcss-preset-env";

const config = {
  plugins: [
    "@tailwindcss/postcss",
    postcssPresetEnv({
      stage: 1,
      preserve: true,
      features: {
        "color-function": { unresolved: "warn" },
        "lab-function": true,
        "oklab-function": true,
        "oklch-function": true,
      },
    }),
  ],
};

export default config;
