# Danone-App

## Tech Stack

A continuación una breve lista de las tecnologías usadas en el proyecto sin embargo, para ver la lista completa se recomienda revisar el archivo **package.json.** .

### Core

- React
- TypeScript
- GraphQl
- Emotion
- Material UI

### Unit Testing

- React testing library
- Jest

### Linting

- ESlint
- Prettier

## Instalación
- `npm i`
- `npm start`

## Estructura de Carpetas

### Assets
- En esta carpeta se incluirán todos los archivos relacionados a imágenes, estilos globales, etc.

### Components
- Esta carpeta será usada para ubicar los componentes más básicos de la app.
### Containers
- Esta carpeta será usada para ubicar los componentes que se usen para agrupar pequeños componentes, como renderizar listas de componentes, etc.
### Screens
- Esta carpeta será usada para ubicar las pantallas que serán usadas a lo largo de la aplicación, las cuáles podrán usar los archivos ubicados en las carpetas de `Containers` y `Components`.
### Utils
- Esta carpeta será usada para ubicar todos los archivos que puedan ser de utilidad en diferentes componentes, containers o screens, tales como constantes, funciones.
- Adicionalmente se ubicarán todos los modelos que la app use y que sean compartidos por 2 o más archivos.

## Toma de decisiones

- Se usó `Hygraph` como CMS principal, debido a su rápida configuración y fácil implementación en el proyecto.

- Luego de haber creado el esquema y modelos necesarios se procedió a llenar toda la información necesaria, se tomó en cuenta los campos requeridos en el documento del reto y se agregaron las siguiente columnas: imágen del producto, nutri-score y la disponibilidad del mismo.

- La primera pantalla que se realizó fue la lista de productos para poder configurar las llamadas al servidor y poder renderizar la información, en esta lista de productos se agregó un pequeño listón como detalle a los productos que sean procedentes de agricultura ecológica.

- La siguiente pantalla en realizarse fue el detalle del producto por la misma razón, siendo una de las pantallas que más tiempo me tomó. Intenté experimentar con diversos componentes(acordion y tabs) para mostrar la información de una manera más creativa sin embargo para la versión móvil no era de gran ayuda, ya que por la cantidad de información el usuario debía realizar acciones innecesarias, siempre tuve en mente que toda la información debía ser mostrada al usuario de forma limpia, rápida y concisa.

- Luego continué con el buscador, y la selección de calorías diarias, para este último decidí mostrar un calendario en el cuál se podía ingresar por fecha la cantidad de calorías y el calendario mostraría un check verde sólo para los días en los que se haya ingresado un valor para la caloría diaria.


- Notas: 
    - Todas las pantallas son completamente responsivas.


