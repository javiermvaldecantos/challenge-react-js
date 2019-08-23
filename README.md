Este proyecto representa una web app que muestra una lista de teléfonos

## Cómo descargar y poner en funcionamiento la app
1. Para clonar el repositorio, ejecuta `git clone https://github.com/javiermvaldecantos/challenge-react-js.git`
2. Una vez tenemos el repositorio, entramos en la carpeta y ejecutamos `npm install` para instalar todas las dependencias necesarias
3. Para poner en funcionamiento el servidor, abrimos una nueva ventana de terminal en la misma carpeta, y ejecutamos `npm run server`.
4. Para poner en funcionamiento el front end, abrimos una nueva ventana de terminal en la misma carpeta, y ejecutamos `npm start`.
5. Listo! la app debería funcionar. En la siguiente sección explico cómo ver el front end y la respuesta del servidor en un navegador (yo he usado Google Chrome).

## Cómo ver la respuesta del servidor (Ejercicio 1)
1. Abre un navegador web.
2. Ir a la siguiente URL: `http://localhost:3001/api/phones`
3. Aparecerá la respuesta del servidor en el navegador, que contiene una lista de modelos de teléfono en formato JSON.

En el código, el servidor está dentro de la carpeta `/server`.

## Cómo ver el front end de la aplicación
1. Abre un navegador web.
2. Ir a la siguiente URL: `http://localhost:3000/`
3. Aparecerá en el navegador la página 1 de la lista de modelos de teléfono. IMPORTANTE: Hay que asegurarse de que el servidor esté funcionando antes, si no es posible que la lista de teléfonos no aparezca.

En el código, la parte más relevante del front-end está dentro de la carpeta `/src`.

## Comentarios sobre la aplicación
1. Para los componentes he utilizado una nomenclatura similar a BEM.
2. He utilizado Bootstrap para estilar los componentes. El modal que presenta los detalles de los modelos de teléfono también es de Bootstrap.
3. He intentado modularizar la aplicación lo máximo posible, creando los archivos `/util/modal.js` para controlar los modals de bootstrap y `/services/phoneService.js` que contiene llamadas a la API. De esta manera si cambiásemos de API en el futuro sólo tendríamos que modificar ese archivo, por ejemplo.
4. He optado por crear una sola action y un solo reducer en Redux, dado que esta aplicación es pequeña. En una aplicación más compleja habría creado más actions y reducers.

## Posibles mejoras no realizadas
1. Incluir SASS para organizar el CSS.
2. Incluir código para presentar un mensaje de error en caso de que la lista de teléfonos no se haya podido obtener de la API.
3. Todos los bonus points de las instrucciones
