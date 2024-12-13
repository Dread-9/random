# Desafío técnico

Esta API proporciona acceso a imágenes aleatorias de patos en formatos JPEG y GIF. Permite obtener imágenes de manera sencilla a través de diferentes endpoints. Los principales incluyen:

- **GET /random**: Devuelve un objeto JSON con un enlace a una imagen aleatoria y un mensaje opcional de atribución.
- **GET /list**: Devuelve un objeto JSON con todos los nombres de archivo disponibles.
- **GET /:num.jpg**: Devuelve un archivo de imagen directamente.
- **GET /http/:code**: Devuelve una imagen de pato representando un código de estado HTTP.

## Documentation

[Api](https://random-d.uk/api)

## API Reference

#### Obtener todos los elementos

```http
GET /api/v2/random
```

```http
GET /api/v2/list
```

```http
GET /api/v2/:num.jpg
```

```http
GET /api/v2/:num.gif
```

## Run Locally

Clona el proyecto

```bash
https://github.com/Dread-9/random.git
```

Ve al directorio del proyecto

```bash
cd random
```

Instalar dependencias

```bash
npm install
```

Configurar el proxy:

En el archivo `proxy.conf.json`, agrega la siguiente configuración:

```json
{
    "/api/": {
        "target": "https://random-d.uk",
        "secure": false,
        "pathRewrite": {
            "^/api": ""
        },
        "changeOrigin": true
    }
}
```

Asegúrate de agregar la opción `--proxy-conf proxy.conf.json` al comando de inicio en el archivo `angular.json` o al ejecutar el servidor localmente:

```bash
ionic serve --proxy-config proxy.conf.json
```

Iniciar el servidor

```bash
ionic serve
```

## Deployment

Para desplegar este proyecto, ejecuta

```bash
ionic build
```

## Feedback

Si tienes algún comentario, no dudes en contactarnos por medio de garymonasterioaguilera@gmail.com.

## Authors

- [@Gary](https://github.com/Dread-9)
