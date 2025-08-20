import { defineConfig } from 'astro/config';
import imageTools from "astro-imagetools";

export default defineConfig({
    integrations: [imageTools()],
});