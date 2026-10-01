# Playwright E2E Automation - Proyecto Base

Este repositorio contiene un proyecto estructurado y escalable para la automatización de pruebas End-to-End (E2E) utilizando **[Playwright](https://playwright.dev/)** y **TypeScript**. 

El proyecto aplica buenas prácticas de diseño de software para pruebas, incluyendo el patrón **Page Object Model (POM)**, **Barrel Files** (para exportaciones limpias) y **Alias de Rutas** para evitar importaciones relativas complejas.

Como ejemplo práctico, el proyecto incluye un test automatizado navegando por la web real de [Sauce Labs](https://saucelabs.com/).

## 🚀 Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- [Node.js](https://nodejs.org/) (v16 o superior)
- npm (viene incluido con Node.js)

## 📦 Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone [https://github.com/](https://github.com/)<TU_USUARIO>/<TU_REPO>.git
   cd <TU_REPO>
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Instala los navegadores necesarios de Playwright (en este caso, Chromium):
   ```bash
   npx playwright install --with-deps chromium
   ```

## 🏗️ Estructura del Proyecto

El código fuente se encuentra en el directorio `src/`, organizado de la siguiente manera:

```text
src/
├── constants/          # Constantes estáticas (URLs, credenciales, textos)
│   ├── index.ts        
│   └── urls.ts         
├── pages/              # Page Object Model (POM) - Clases por cada página web
│   ├── HomePage.ts     # Localizadores y acciones de la página principal
│   ├── PricingPage.ts  # Localizadores de la página de precios
│   └── index.ts        
├── tests/              # Archivos de prueba (agrupados por Historia de Usuario)
│   └── HU-101/
│       └── navegacion.spec.ts
└── utils/              # Funciones auxiliares reutilizables
    ├── helpers.ts      # Ej: Manejo de cookies (acceptCookiesIfExist)
    └── index.ts        
```

### Alias de Rutas configurados
Gracias a la configuración en el `tsconfig.json`, puedes importar archivos de forma limpia sin importar en qué nivel de carpeta te encuentres. 

**Ejemplo:**
```typescript
// ❌ En lugar de hacer esto:
import { HomePage } from '../../pages/HomePage';

// ✅ Hacemos esto:
import { HomePage } from '@pages';
import { URLS } from '@constants';
import { acceptCookiesIfExist } from '@utils';
```

## 🏃‍♂️ Cómo ejecutar las pruebas

Playwright ofrece múltiples formas de ejecutar y visualizar los tests. Aquí tienes los comandos principales:

**Ejecutar todas las pruebas (Modo Headless - sin interfaz gráfica):**
```bash
npx playwright test
```

**Ejecutar pruebas con el Modo UI (Recomendado para desarrollar y depurar):**
Abre una interfaz interactiva donde puedes ver la ejecución paso a paso, inspeccionar el DOM y ver el historial de red.
```bash
npx playwright test --ui
```

**Ejecutar pruebas viendo el navegador (Modo Headed):**
```bash
npx playwright test --headed
```

**Ver el reporte HTML generado:**
Si un test falla, o si quieres ver el reporte de la última ejecución:
```bash
npx playwright show-report
```

## 💡 Buenas Prácticas implementadas

1. **Test Steps en Inglés:** Se utiliza `test.step('description', async () => { ... })` para agrupar bloques lógicos dentro de un test. Esto hace que los reportes sean mucho más descriptivos si algo falla.
2. **Localizadores semánticos:** Se prioriza el uso de localizadores orientados a la accesibilidad del usuario (ej. `page.getByRole()`) para hacer los tests más resilientes a los cambios de diseño estético.
3. **baseURL:** La URL principal de la aplicación está definida en el `playwright.config.ts`, permitiendo usar rutas relativas en todo el framework y facilitando el cambio entre entornos (DEV, QA, PROD).
4. **Acciones en el Test:** El patrón POM se usa para mapear localizadores y acciones complejas de navegación, pero los clics puntuales y las aserciones (`expect`) se mantienen en el test para máxima legibilidad del flujo de negocio.