# Misión 3 (PokeApi)

## Instalación de Tailwind

npm install tailwindcss @tailwindcss/vite

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

@import "tailwindcss";

npm run dev

<link href="/src/styles.css" rel="stylesheet">