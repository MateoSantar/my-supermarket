
# My Supermarket 🛒

**My Supermarket** es una aplicación web moderna de gestión administrativa diseñada para supervisar las operaciones de un supermercado. Incluye un dashboard interactivo, gestión de nómina de empleados, control de inventario y visualización de datos en tiempo real.

Construido con **Next.js (App Router)** y **TypeScript**, priorizando el rendimiento, la seguridad y una experiencia de usuario fluida.

## 🚀 Características Principales

* **🔐 Autenticación Segura:** Sistema de login protegido utilizando **NextAuth.js** (Credentials Provider con estrategia JWT).
* **📊 Dashboard de Empleados:**
    * Métricas clave (Total de empleados, nómina total, salario promedio).
    * Gráficos visuales de distribución por género y área.
    * Calendario de turnos y reuniones (`ShiftCalendar`).
    * Tablas de gestión de personal.
* **📦 Gestión de Productos:**
    * Inventario detallado de productos.
    * Análisis de "Top Products" basado en ventas.
    * Seguimiento de entregas (`DeliveriesTable`).
* **🎨 UI/UX Moderna:**
    * Diseño totalmente responsivo con **Tailwind CSS**.
    * Animaciones fluidas en la navegación con **Framer Motion**.
    * Tipografía personalizada (Bebas Neue y Barlow).
    * Pantalla de bienvenida con video de fondo.

## 🛠️ Tech Stack

* **Core:** [Next.js 14](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/).
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/), clsx.
* **Animaciones:** [Framer Motion](https://www.framer.com/motion/).
* **Autenticación:** [NextAuth.js](https://next-auth.js.org/).
* **Iconos:** [Heroicons](https://heroicons.com/).
* **Fuentes:** `next/font` (Bebas Neue, Barlow).

## 📂 Estructura del Proyecto

El proyecto sigue la arquitectura moderna de Next.js App Router:

```bash
├── app/
│   ├── dashboard/       # Rutas protegidas
│   │   ├── employees/   # Analytics y tablas de empleados
│   │   ├── products/    # Inventario y entregas
│   │   └── page.tsx     # Landing del dashboard (Video BG)
│   ├── login/           # Página de inicio de sesión
│   ├── lib/             # Datos simulados (data.ts) y utilidades
│   ├── ui/              # Componentes de UI (Tablas, Gráficos)
│   ├── api/auth/        # Configuración de NextAuth
│   └── layout.tsx       # Layout raíz con AuthProviders

```

## ⚡ Instalación y Uso

Sigue estos pasos para correr el proyecto localmente:

1. **Clonar el repositorio:**
```bash
git clone [https://github.com/tu-usuario/my-supermarket.git](https://github.com/tu-usuario/my-supermarket.git)
cd my-supermarket

```


2. **Instalar dependencias:**
```bash
npm install
# o
yarn install

```


3. **Configurar Variables de Entorno:**
Crea un archivo `.env.local` en la raíz del proyecto y agrega las siguientes claves necesarias para NextAuth:
```env
NEXTAUTH_SECRET=tu_secreto_super_seguro_aqui
NEXTAUTH_URL=http://localhost:3000

```


4. **Ejecutar el servidor de desarrollo:**
```bash
npm run dev

```


5. **Abrir en el navegador:**
Visita `http://localhost:3000`.

> **Nota:** Actualmente, el sistema utiliza datos simulados (`mock data`) ubicados en `@/app/lib/data` para usuarios y productos, por lo que no necesitas configurar una base de datos externa para probar la demo.

## 👤 Autor

**Mateo Santarsiero**

* Desarrollador Full Stack
