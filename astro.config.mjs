import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: "https://hamyab.hosseinhunta.ir",
  base: "/hamyab",
  build: {
    assets: "assets",
  },
});
