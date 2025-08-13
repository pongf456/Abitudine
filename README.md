0,0 @@

# Abitudine  Habits App 🚀


**Abitudine** es una aplicación móvil multiplataforma, diseñada con esmero para ayudarte a construir, seguir y mantener hábitos positivos en tu día a día. Su interfaz limpia y motivadora te acompaña en el camino hacia tus metas personales.

Este proyecto fue desarrollado como una pieza central de mi portafolio, demostrando habilidades en el desarrollo de aplicaciones móviles modernas con React Native y Expo.

## ✨ Características Principales

- **Creación de Hábitos Personalizados**: Define tus propios hábitos, establece metas, elige colores y añade iconos para una experiencia única.
- **Seguimiento Visual del Progreso**: Monitorea tu avance con calendarios y gráficos intuitivos que te motivan a no romper la cadena.
- **Recordatorios y Notificaciones**: Configura notificaciones inteligentes para no olvidar nunca tus hábitos.
- **Interfaz Limpia y Minimalista**: Una experiencia de usuario fluida y sin distracciones, centrada en lo que de verdad importa: tu progreso.
- **Soporte Multiplataforma**: Funciona de manera nativa en iOS y Android desde una única base de código.

---

## 🛠️ Stack Tecnológico

Este proyecto fue construido utilizando un stack de tecnologías moderno y robusto, enfocado en la productividad y la calidad del código.

- **Framework**: [React Native](https://reactnative.dev/) con [Expo](https://expo.dev/) (SDK 52)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Navegación**: [Expo Router v4](https://docs.expo.dev/router/introduction/) (Navegación basada en archivos)
- **Gestión de Estado**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Estilos**: [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS para React Native)
- **Manejo de Formularios**: [React Hook Form](https://react-hook-form.com/)
- **Validación de Esquemas**: [Zod](https://zod.dev/)
- **Visualización de Datos**: [React Native Gifted Charts](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts)
- **Almacenamiento Local**: [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
- **Linting y Formateo**: ESLint y Prettier

### Estructura del Proyecto

El proyecto sigue una estructura organizada y escalable, aprovechando las convenciones de Expo Router para la navegación.

```
Abitudine/
├── app/                # Directorio principal de Expo Router
│   ├── (tabs)/         # Layout para la navegación por pestañas
│   │   ├── _layout.tsx # Definición del layout de las pestañas
│   │   ├── index.tsx   # Pantalla de inicio
│   │   └── ...         # Otras pantallas dentro de las pestañas
│   ├── _layout.tsx     # Layout raíz de la aplicación
│   └── index.tsx       # Punto de entrada de la app
├── assets/             # Fuentes, imágenes e iconos
├── components/         # Componentes reutilizables de la UI
├── constants/          # Constantes (colores, temas, etc.)
├── hooks/              # Hooks personalizados
├── lib/                # Utilidades y lógica de negocio
├── scripts/            # Scripts de utilidad para el proyecto
└── ...                 # Otros archivos de configuración (app.json, tailwind.config.js, etc.)
```

---

## 🚀 Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu entorno de desarrollo local.

### Prerrequisitos

- Node.js (versión 18 o superior)
- Yarn o npm
- [Expo Go](https://expo.dev/go) en tu dispositivo móvil (iOS o Android) o un emulador configurado.

### Instalación

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/Abitudine.git
    cd Abitudine
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

    o si usas Yarn:

    ```bash
    yarn install
    ```

### Ejecución del Proyecto

1. **Inicia el servidor de desarrollo de Expo:**

    ```bash
    npm start
    ```

2. **Abre la aplicación:**
    - **En iOS:** Escanea el código QR con la cámara de tu iPhone o la app Expo Go.
    - **En Android:** Escanea el código QR con la app Expo Go.
    - **En la web:** Presiona `w` en la terminal una vez que el servidor de desarrollo esté corriendo.

### Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes scripts:

- `npm start`: Inicia el servidor de desarrollo de Expo.
- `npm run android`: Inicia la app en un emulador o dispositivo Android.
- `npm run ios`: Inicia la app en un simulador o dispositivo iOS.
- `npm run web`: Inicia la app en un navegador web.
- `npm run lint`: Ejecuta el linter (ESLint) para verificar la calidad del código.
- `npm test`: Ejecuta las pruebas con Jest.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 👤 Contacto

**Email**: <adonayyeidersonparedes@gmail.com>

- **GitHub**: @pongf456

¡Gracias por visitar mi proyecto!
