# 📦 ControlStock WebApp

> **Gestión de inventario y ventas simple, rápida y 100% local.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![IndexedDB](https://img.shields.io/badge/IndexedDB-Local_Storage-lightgrey?style=for-the-badge)

---

## 📖 Sobre el Proyecto

**ControlStock WebApp** es una solución desarrollada para pequeños negocios familiares que necesitan llevar un control riguroso de su inventario y ventas sin la complejidad de sistemas costosos o dependientes de internet.

Construida con tecnologías web modernas, esta aplicación funciona completamente en el navegador del cliente, asegurando velocidad y privacidad de los datos.

## ✨ Características Principales

*   🛒 **Punto de Venta (POS) Ágil**: Interfaz optimizada para cargar ventas rápidamente. Buscador de productos en tiempo real y carrito de compras intuitivo.
*   📦 **Gestión de Stock en Tiempo Real**: Visualiza, edita precios y ajusta el stock de tus productos al instante.
*   📄 **Generación de Tickets PDF**: Crea comprobantes de venta profesionales automáticamente con `jspdf` al finalizar cada transacción.
*   💾 **Persistencia Local (Offline)**: Gracias a **IndexedDB**, tus datos viven en tu dispositivo. No requiere conexión a internet ni servidores backend.
*   📊 **Historial de Ventas**: Consulta todas las operaciones realizadas para llevar un control de caja y balances.
*   🌓 **Tema Claro y Oscuro**: Diseño responsivo y adaptable que cuida tu vista con un modo oscuro integrado.

## 🛠️ Tecnologías Utilizadas

*   **React**: Biblioteca para construir la interfaz de usuario.
*   **Vite**: Entorno de desarrollo de próxima generación, ultra rápido.
*   **Tailwind CSS**: Framework de utilidades para un diseño moderno y responsivo.
*   **idb**: Librería ligera para facilitar el uso de IndexedDB.
*   **jspdf**: Generación de documentos PDF desde el cliente.

## 🚀 Instalación y Ejecución

Sigue estos pasos para correr el proyecto en tu computadora:

### Prerrequisitos

*   Node.js (versión 16 o superior)
*   npm (gestor de paquetes)

### Pasos

1.  **Clonar o descargar el repositorio**:
    ```bash
    git clone https://github.com/iatorres/ControlStock_WebApp.git
    cd ControlStock_WebApp
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador**:
    Visita `http://localhost:5173` para ver la aplicación en acción.

## 📱 Uso

1.  **Carga Inicial**: Ve a la sección de **Stock** para agregar tus productos iniciales.
2.  **Vender**: Dirígete a **Nueva Venta**, busca los productos, agrégalos al carrito y presiona "Cobrar".
3.  **Comprobante**: Se descargará automáticamente un ticket en PDF con el detalle de la compra.
4.  **Control**: Revisa la sección **Historial** para ver las ventas pasadas.

## 📝 Notas del Desarrollador

*   Este proyecto fue creado aplicando conocimientos adquiridos en la **UADE**.
*   Actualmente es utilizado en un entorno de producción real (negocio familiar).
*   **Futuro**: Se contempla la posibilidad de empaquetar esta web app como una aplicación de escritorio nativa utilizando **Electron** o **Tauri** para una mejor integración con el sistema operativo.

## ✒️ Autor

**Dev Ian Torres**

---
*Hecho con ❤️ y mucho código.*
