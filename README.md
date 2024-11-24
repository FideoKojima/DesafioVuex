# 🎮 Tienda de Juegos 32 Bits

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vuex](https://img.shields.io/badge/Vuex-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

## 📝 Descripción

Tienda de Juegos 32 Bits es una aplicación SPA (Single Page Application) desarrollada con Vue.js que permite gestionar el inventario de una tienda de videojuegos. La aplicación utiliza Vuex para el manejo del estado global y proporciona una interfaz intuitiva para la gestión de productos.

## ✨ Características

- 📊 Visualización de inventario en tiempo real
- 🛍️ Sistema de ventas con actualización automática de stock
- 💫 Interfaz responsive con Bootstrap
- 🎯 Gestión centralizada del estado con Vuex
- 🎨 Indicadores visuales de estado del producto

## 🚀 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/FideoKojima/DesafioVuex.git
cd DesafioVuex
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3**: Framework progresivo para construir interfaces de usuario
- **Vite**: Build tool y servidor de desarrollo
- **Vuex 4**: Manejo de estado centralizado para Vue.js
- **Bootstrap 5**: Framework CSS para diseño responsive

## 📁 Estructura del Proyecto

```
DesafioVuex/
├── src/
│   ├── components/
│   ├── store/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 💻 Uso

La aplicación muestra una tabla con el inventario de juegos que incluye:

- Código del producto
- Nombre del juego
- Stock disponible
- Precio
- Indicador de color
- Estado destacado
- Botón de venta

### Funcionalidades principales:

1. **Visualización de Inventario**

   - Lista completa de juegos disponibles
   - Información detallada de cada producto
   - Indicadores visuales de estado

2. **Gestión de Ventas**

   - Botón de venta por producto
   - Actualización automática de stock
   - Deshabilitación automática cuando no hay stock

3. **Resumen de Inventario**
   - Total de juegos en catálogo
   - Stock total disponible
   - Estado en tiempo real

## 🔄 Estado Global (Vuex)

El estado de la aplicación se gestiona a través de Vuex con la siguiente estructura:

```javascript
state: {
  juegos: [
    /* array de juegos */
  ];
}

getters: {
  totalJuegos;
  stockTotal;
}

mutations: {
  REDUCIR_STOCK;
}

actions: {
  venderJuego;
}
```

## 📱 Vista Previa

```
+----------------+----------------+--------+---------+--------+-----------+
|     Código     |     Nombre    | Stock  | Precio  | Color  | Destacado |
+----------------+----------------+--------+---------+--------+-----------+
|     0001      |    Sekiro     |  100   | $30.000 |   🔴   |    ✅     |
|     0002      |    FIFA 21    |  100   | $25.000 |   🔵   |    ❌     |
|      ...      |      ...      |   ...  |   ...   |   ...  |    ...    |
+----------------+----------------+--------+---------+--------+-----------+
```

## 🤝 Contribución

1. Fork del repositorio
2. Crea una rama para tu feature
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit de tus cambios
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push a la rama
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Abre un Pull Request

## 🎉 Agradecimientos

- Desafío Latam por la oportunidad de desarrollo
- Comunidad Vue.js por su excelente documentación
- Contribuidores que dedican tiempo a mejorar este proyecto

---

<div align="center">
  
¡Hecho con ❤️ por [Luis Suarez]!

</div>
