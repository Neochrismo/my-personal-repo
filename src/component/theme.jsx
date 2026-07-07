import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Inter', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;