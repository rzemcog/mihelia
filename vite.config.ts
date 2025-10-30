import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import flowbiteReact from "flowbite-react/plugin/vite";
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(), 
		flowbiteReact(), 
		tailwindcss(), 
		svgr({
			// Для Preact:
			svgrOptions: {
				icon: true,
			}
		}),
	],
});