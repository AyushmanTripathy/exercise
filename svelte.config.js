import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import sass from "sass";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
  preprocess: preprocess({
    sass
  })
};

export default config;
