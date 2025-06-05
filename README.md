# Misión 3 (PokeApi)

Esta es la tercera misión que hago en la empresa, en esta ocasion hemos hecho un programa que consumia la PokeApi.

---

## Tecnologías utilizas


| Tecnología utilizada  | Versión |
|---------------------- |---------|
| Tailwind              | 4.x.x   |
| npm                   | 10.x    |
| Vite                  | 5.x.x   |

---

## Instalación de Tailwind

Primero tendremos que instalar el framework des de las librerias de npm.

```bash
npm install tailwindcss @tailwindcss/vite
```

Una vez ya tenemos el framework instalado tendremos que editar el archivo **vite.config.ts** y añadir estas linias:

```bash
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Luego en la oja de estilos, tendremos que importat el framework:

```bash
@import "tailwindcss";
```

## Instalació de otras librerias

Para poder hacer peticiones a la API, tendremos que usar la libreria Axios, para instalarla tendremos que:
```bash
npm install axios
```

## Instalació 

```bash
git clone <URL del repositorio>
cd mission_two
```

**Iniciar Servidor en Local**

```bash
npm run dev
```
La apliacacion estara en:

```bash
http://localhost:5173
```

