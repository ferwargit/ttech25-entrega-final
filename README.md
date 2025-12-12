# Backend API - Gestión de Productos (E-commerce)

[![Deploy with Vercel](https://vercel.com/button)](https://ttech25-entrega-final.vercel.app/)

> **Demo en vivo:** [https://ttech25-entrega-final.vercel.app/](https://ttech25-entrega-final.vercel.app/)

Una API RESTful robusta y escalable desarrollada con Node.js y Express para la gestión de productos de un e-commerce. Este proyecto implementa una arquitectura MVC, conexión a base de datos en la nube (Firebase Firestore) y seguridad mediante autenticación JWT.

Este proyecto representa la **Entrega Final** para el curso de "Backend con Node.js" de Talento Tech 2025, integrando todos los conocimientos adquiridos sobre servidores web, bases de datos NoSQL y buenas prácticas de ingeniería de software.

## Tabla de Contenidos

1.  [Características Principales](#características-principales)
2.  [Stack Tecnológico](#stack-tecnológico)
3.  [Requisitos Previos](#requisitos-previos)
4.  [Instalación y Configuración](#instalación-y-configuración)
5.  [Documentación de la API (Endpoints)](#documentación-de-la-api-endpoints)
    *   [Autenticación](#1-autenticación)
    *   [Productos](#2-productos)
6.  [Arquitectura del Proyecto](#arquitectura-del-proyecto)
7.  [Despliegue](#despliegue)
8.  [Autor](#autor)
9.  [Licencia](#licencia)

## Características Principales

*   **Arquitectura MVC Modificada**: Separación clara de responsabilidades en Capas (Rutas, Controladores, Servicios, Modelos).
*   **Base de Datos Cloud**: Persistencia de datos en tiempo real utilizando **Google Firebase (Firestore)**.
*   **Seguridad JWT**: Implementación de JSON Web Tokens para proteger rutas sensibles (Crear y Eliminar productos).
*   **API RESTful**: Endpoints estandarizados utilizando los verbos HTTP correctos (GET, POST, DELETE).
*   **Manejo de Errores**: Respuestas HTTP coherentes (400, 401, 403, 404, 500) para una mejor experiencia de depuración.
*   **Variables de Entorno**: Gestión segura de credenciales mediante `dotenv`.
*   **Validaciones**: Capa de servicio encargada de validar la integridad de los datos antes de guardarlos.

## Stack Tecnológico

*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Base de Datos**: Firebase Firestore
*   **Autenticación**: jsonwebtoken (JWT)
*   **Utilidades**: dotenv, cors, body-parser
*   **Despliegue**: Vercel

## Requisitos Previos

*   [Node.js](https://nodejs.org/) (v16 o superior).
*   Cuenta en [Firebase Console](https://console.firebase.google.com/) para obtener las credenciales.
*   Cliente HTTP para pruebas (Thunder Client, Postman, etc.).

## Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/ferwargit/ttech25-entrega-final
    cd ttech25-entrega-final
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno (IMPORTANTE):**
    Renombra el archivo `.env.example` a `.env` y completa los valores con tus credenciales de Firebase y configuración deseada:
    
    ```env
    PORT=3000
    JWT_SECRET=tu_palabra_secreta_para_firmar_tokens
    
    # Credenciales de Firebase
    FIREBASE_API_KEY=...
    FIREBASE_AUTH_DOMAIN=...
    FIREBASE_PROJECT_ID=...
    # ... resto de las credenciales de Firebase
    ```

4.  **Iniciar el servidor:**
    ```bash
    npm run dev
    ```
    El servidor iniciará en `http://localhost:3000`.

## Documentación de la API (Endpoints)

### 1. Autenticación

#### Login de Usuario
Genera un Token JWT para acceder a las rutas protegidas.

*   **Endpoint:** `POST /auth/login`
*   **Body (JSON):**

    ```json
    {
      "email": "admin@test.com",
      "password": "123456"
    }
    ```
*   **Respuesta Exitosa:** Devuelve un objeto con el `token`.

### 2. Productos

#### Obtener todos los productos (Público)
*   **Endpoint:** `GET /api/products`
*   **Descripción:** Retorna la lista completa de productos almacenados en Firestore.

#### Obtener un producto por ID (Público)
*   **Endpoint:** `GET /api/products/:id`
*   **Descripción:** Retorna el detalle de un producto específico.

#### Crear un nuevo producto (Privado 🔒)
Requiere enviar el Token en el Header `Authorization: Bearer <TOKEN>`.

*   **Endpoint:** `POST /api/products/create`
*   **Body (JSON):**

    ```json
    {
      "name": "Auriculares Sony",
      "price": 85000,
      "categories": ["Audio", "Tecnología"]
    }
    ```

#### Eliminar un producto (Privado 🔒)
Requiere enviar el Token en el Header `Authorization: Bearer <TOKEN>`.

*   **Endpoint:** `DELETE /api/products/:id`
*   **Descripción:** Elimina permanentemente el documento de la base de datos.

## Arquitectura del Proyecto

El código está organizado bajo una estructura modular escalable:

```text
src/
├── config/         # Conexión a Firebase
├── controllers/    # Lógica de respuesta (req, res)
├── middlewares/    # Interceptores (Auth, Errores)
├── models/         # Acceso directo a datos (Firestore)
├── routes/         # Definición de Endpoints
└── services/       # Lógica de negocio y validaciones
```

## Despliegue

Este proyecto ha sido desplegado exitosamente utilizando **Vercel**, aprovechando su integración nativa con proyectos Node.js y GitHub.

*   **URL de Producción:** [https://ttech25-entrega-final.vercel.app/](https://ttech25-entrega-final.vercel.app/)

El despliegue es automático (CD) cada vez que se realiza un push a la rama principal (`main`) del repositorio.

## Autor

*   **Fernando Warno** - *Desarrollador Full Stack*

## Licencia

Este proyecto está bajo la Licencia MIT.