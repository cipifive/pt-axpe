# __Ejercicio 2__
## _Solución propuesta para el ejercicio 2_

Se ha implementado la funcionalidad completa del proyecto, realizando ciertas modificaciones de configuración y lógica del código.

Para poder tratar de historificar los datos desde el lado del cliente, ya que no contamos ni con backend, ni servicio de almacenamiento de datos, utilizamos el localStorage como motor principal de almacenamiento. Para hacer esta lógica más liviana, se ha modificado el custom hook useFetch, para que haga una petición al json de datos si no tenemos el objeto meetups almacenado en la memoria local del navegador.

Además, se implementa un nuevo estado global de zustand, cuya única función es introducir la variable flag en el array de dependencias del useFetch, de tal manera que siempre que haya una adicción de Meetup, o un favorito añadido/borrado, se volverán a pedir los datos al localStorage y se tendrá siempre el dato hidratado.

Por otra parte, se han añadido las librerías Formik y Yup para reforzar la validación del formulario de creación de Meetups. Se han aplicado restricciones a cada uno de los campos, las cuales impiden que se haga una inserción incompleta en el array de Meetups alojado en el localStorage.

En cuanto a los requisitos y condiciones:

-  __Para el header se requiere una animación para tener un acceso rápido a las distintas páginas cuando hacemos scroll. Se quiere que cuando hacemos scroll down, este tiene que desaparecer y cuando hacemos scroll up tiene que volver a aparecer en la posición de la página dónde te encuentres.__
Se han creado dos nuevos estados en el App.js para gestionar estos eventos de scroll dentro del navegador (isVisible y lastScrollY). El primero de ellos indicará si la barra de navegación es o no visible. El segundo, indica la posición de la página en el eje Y tras cada acción de scroll. Además, se ha implementado el hook useEffect, que añade el evento de scroll a la pantalla, y ejecuta la función handleScroll cuando se realiza dicha acción. Este useEffect tiene una sentencia de retorno, donde se elimina el evento cuando se desmonta el componente.
De esta manera, el estado isVisible es capaz de indicar si la barra de navegación ha de verse o no, en función de si hacemos scroll hacia arriba o hacia abajo, o estamos en la parte superior de la pantalla.
Esta propiedad se le pasa al compontente MainNavigation, y función de su valor, se aplica una u otra clase al componente header. El propio css de este componente se ha modificado para que la barra de navegación sea fija, y aparezca o desaparezca cuando así lo dicte el valor de isVisible.

- __Desde el header se puede navegar a las distintas páginas, pero por temas de SEO se requiere que esta navegación se vea reflejada en la url. (Ejemplo: la página de favoritos podría ser /favorites).__
Para abordar esta casuística, se ha importado la librería react-router-dom, que permite gestionar la navegación de la aplicación de una manera cómoda y sencilla, dotándonos de libertad para definir las urls que queramos en cada componente. Esta lógica se ha implementado principalmente en el componente App.js. Se ha creado un elemento router, donde se definen todos los paths de la web, así como los componentes que se van a renderizar en cada uno. De igual manera, se ha sustituido toda la lógica del índice de página actual y su renderizado, por un RouterProvider que recibe como parámetro el router mencionado anteriormente. Además, se ha modificado el elemento Layout, incluyendo dentro el elemento MainNavigation, de tal manera que se ha podido optimizar y reutilizar el código.
Por otra parte, en el propio MainNavigation se sustituyen los href de los tags a por eventos de onClick, donde se usa el hook useNavigate, propio de react-router-dom, para navegar por las diferentes urls sin tener que refrescar la página, respetando el paradigma de las SPA.
- __El botón de añadir a favoritos no está funcionando. Implementa la lógica para añadir y quitar de favoritos.__
Para implementar la funcionalidad de adicción y borrado de favoritos, se han importado dos librerías: Zustand para la gestión de estados globales, y react-notifications para mostrar alertas al usuario de las acciones que va realizando.
Lo primero que se ha hecho es arreglar la page de AllMeetupsPage.js, ya que no estaba mostrando los Meetups de manera correcta. Para ello, tras realizar una llamada al data.json, se ha hecho un map en la sentencia de return del componente, donde se renderiza el componente MeetupItem.js, recibiendo como parámetro el propio item.
Una vez implementada esta lógica, dentro del propio componente MeetupItem.js se ha desarrollado la función handleAddToFavorites, la cual comprueba el localStorage. Si ese item está alojado allí devuelve una notificación de que ya está en favoritos, y en caso contrario, lo añade al localStorage, notificándolo y aumentando en uno el valor del estado global de Zustand, que se utiliza para contar el número de meetups que hay en la sección de favoritos.
De igual manera, se ha implementado la page Favorites.js, donde se renderizan los meetups tal y como se hace en el AllMeetupsPage.js, pero tan solo mostrando los que están en localStorage almacenados, y con un botón de borrado de favoritos, que realiza las operaciones inversas que el comentado anteriormente para añadirlos.
- __Implementación de algún test. Puede ser e2e, unitario o funcional. En el proyecto encontrarás algunos test que el programador que inició el proyecto, empezó a hacer.__
Para la parte de testing, se han completado los test que ya estaban iniciando, los cuales comprobaban el funcionamiento de los componentens App.js y MeetupItem.js.
En el App.test.js se comprueba que el componente App se renderice correctamente. De igual manera, también se comprueba que se renderice de manera adecuada la barra de navegación, y los diferentes layouts que componen cada una de las vistas.
En el MeetupItem.test.js se comprueba también que el propio componente se renderice de manera adecuada. Además, comprueba que se visualice correctamente la información del meetup que recibe como parámetro, y que la función de añadir a favoritos funcione correctamente.
Adicionalmente, se ha añadido un test más, en este caso para la barra de navegación, el MainNavigation.test.js. Además de comprobar, como en todos los demás, el correcto renderizado, también se comprueba que se muestren correctamente los 3 menús disponibles dentro de la web.
## _Para ejecutar el proyecto_
-  __npm i.__
Para instalar las librerías necesarias para el correcto funcionamiento del código
-  __npm start.__
Para iniciar el proyecto en modo desarrollo, sin minimizar los assets. Se podrá acceder al mismo a través de la url http://localhost:3000/meetups. La propia configuración del router hace que te lleve a esa url directamente, aún accediendo simplemente a http://localhost:3000
-  __npm run build.__
Para generar la versión de producción, donde se minimizan los assets que componen la aplicación, creando una versión optimizada del proyecto.
-  __npm run test.__
Para ejecutar los test planteados y comprobar si estos pasan o hay alguna falla en la funcionalidad.

