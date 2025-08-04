import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import flowbiteReact from "flowbite-react/plugin/vite";
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact(), flowbiteReact(), tailwindcss()],
});