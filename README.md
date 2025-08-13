# Welcome to your Expo app 👋

# Abitudine | Rastreador de Hábitos

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
`Expo` `React Native` `TypeScript` `NativeWind` `Zustand`

## Get started

**Abitudine** es una aplicación móvil moderna y elegante, diseñada para ayudarte a construir, rastrear y mantener hábitos positivos en tu día a día. Con una interfaz intuitiva y potentes funcionalidades, Abitudine es tu compañero ideal para el desarrollo personal.

1. Install dependencies

## 📸 Capturas de Pantalla

   ```bash
   npm install
   ```

*(Aquí puedes agregar capturas de pantalla de la aplicación)*

2. Start the app
| Pantalla de Inicio | Progreso del Hábito | Estadísticas |
| :----------------: | :--------------------: | :----------: |
|      *(img 1)*       |        *(img 2)*         |   *(img 3)*    |

   ```bash
    npx expo start
   ```

## ✨ Características Principales

In the output, you'll find options to open the app in a

- **Creación de Hábitos Personalizados:** Define tus propios hábitos, establece metas y elige la frecuencia (diaria, semanal, etc.).
- **Seguimiento Intuitivo:** Marca tus hábitos como completados con un simple toque.
- **Visualización de Progreso:** Analiza tu constancia con gráficos y estadísticas detalladas que te motivarán a seguir adelante.
- **Recordatorios Inteligentes:** Configura notificaciones para no olvidar nunca tus compromisos.
- **Interfaz Limpia y Atractiva:** Una experiencia de usuario fluida y agradable, construida con NativeWind.
- **Multiplataforma:** Disponible para dispositivos iOS y Android gracias a Expo.

- development build
- Android emulator
- iOS simulator
- Expo Go, a limited sandbox for trying out app development with Expo

## 🛠️ Stack Tecnológico

You can start developing by editing the files inside the **app** directory. This project uses file-based routing.
Este proyecto está construido con tecnologías modernas para ofrecer una experiencia de desarrollo y de usuario de primer nivel.

## Get a fresh project

- **Framework:** React Native con Expo
- **Lenguaje:** TypeScript
- **Navegación:** Expo Router (Navegación basada en archivos con rutas tipadas)
- **Estilos:** NativeWind (Tailwind CSS para React Native)
- **Gestión de Estado:** Zustand
- **Manejo de Formularios:** React Hook Form con Zod para validación de esquemas.
- **Almacenamiento Local:** AsyncStorage
- **Gráficos:** React Native Gifted Charts
- **Linting & Formato:** ESLint y Prettier

When you're ready, run:

## 🚀 Cómo Empezar

```bash
npm run reset-project
```

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno de desarrollo local.

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Prerrequisitos

## Learn more

- Node.js (versión LTS recomendada)
- `npm` o `yarn`
- `Expo CLI`: `npm install -g expo-cli`
- Un emulador de Android/iOS o un dispositivo físico con la app Expo Go.

To learn more about developing your project with Expo, look at the following resources:

### Instalación y Ejecución

- Expo documentation: Learn fundamentals, or go into advanced topics with our guides.
- Learn Expo tutorial: Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

1. **Clona el repositorio (si aplica):**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd Abitudine
    ```

## Join the community

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

Join our community of developers creating universal apps.
3.  **Inicia el servidor de desarrollo de Expo:**
    ```bash
    npx expo start
    ```

- Expo on GitHub: View our open source platform and contribute.
- Discord community: Chat with Expo users and ask questions.
Esto abrirá el DevTools de Expo en tu navegador. Desde allí, puedes:
- Escanear el código QR con la app `Expo Go` en tu dispositivo iOS o Android.
- Presionar `a` para abrir en un emulador de Android.
- Presionar `i` para abrir en un simulador de iOS.

## 📁 Estructura del Proyecto

El proyecto utiliza la estructura de carpetas recomendada por `Expo Router` para una organización clara y escalable.

```
Abitudine/
├── app/              # Contiene todas las rutas y pantallas de la aplicación.
│   ├── (tabs)/       # Layout para la navegación por pestañas.
│   ├── _layout.tsx   # Layout principal de la aplicación.
│   └── index.tsx     # Pantalla de inicio.
├── assets/           # Fuentes, imágenes y otros recursos estáticos.
├── components/       # Componentes reutilizables de la UI (botones, inputs, etc.).
├── constants/        # Constantes globales (colores, estilos, dimensiones).
├── hooks/            # Hooks personalizados (ej. useAuth, useHabits).
├── lib/              # Funciones de utilidad y helpers (ej. formateo de fechas).
├── store/            # Configuración del store de Zustand para el estado global.
└── ...               # Otros archivos de configuración (babel, tailwind, etc.).
```

## 📜 Scripts Disponibles

En el archivo `package.json`, encontrarás varios scripts para facilitar el desarrollo:

- `npm start`: Inicia el servidor de desarrollo de Expo.
- `npm run android`: Inicia la aplicación en un emulador/dispositivo Android conectado.
- `npm run ios`: Inicia la aplicación en un simulador/dispositivo iOS conectado.
- `npm run web`: Inicia la aplicación en un navegador web.
- `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
- `npm run test`: Ejecuta las pruebas unitarias con Jest.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar Abitudine, por favor, sigue estos pasos:

1. Haz un `Fork` del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz `commit` (`git commit -m 'Añade nueva funcionalidad'`).
4. Haz `push` a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un `Pull Request`.
