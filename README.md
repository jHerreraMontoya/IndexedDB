# IndexedDB

## Autora
Jennifer Herrera Montoya

# Control de Versiones
_• v1.0.0 - Se añade los ficheros correspondiente a la realización de la práctica de IndexedDB_
```
 En este archivo encontramos las referencias a los diferentes ficheros:
      •index.html
      •css/micss.css
      •imagenes/ con las imagenes pertenecientes a las diferentes categorias, producciones, 
      actores, directos y logo de la página
      •js/BaseException.js
      •js/VideoSystemObjects.js
      •js/VideoSystem.js
      •js/DOM.js, modificado con el código para almacenar los objetos en la base de datos
      •Recursos.html, correspondiente a la ventana nueva donde aparecerán los recursos
      •js/Formularios.js
      •js/IndexedDB.js
      •manifest.appcache, fichero para la cache
      •Cronometro que contiene Cronometro.html y js/Cronometro.js
```

_• v1.0.0 - Cronometro_
```
 Realización de la implementación de un cronometro y sus funcionalidades.
      •Cronometro que contiene Cronometro.html y js/Cronometro.js
```

_• v1.0.0 - IndexedDB_
```
Creación de la Base de datos VSystemDataBase
      • Implementación de los objetos del VideoSystem mediante indexedDB
      • Creación de los diferentes almacenes para implementar dichos objetos
      en la base de datos VSystemDataBase
      • Volcado de los diferentes objetos a dichos almacenes en la base 
      de datos VSystemDataBase
      • Creación de las diferentes funciones para gestionar las nuevas categories,
      directors, actors y productions de la base de datos a través de los formularios
      creados en la practica anterior.
      
Creación del fichero manifest.appcache para implementar la cache como se pide en la 
práctica.
```

_• v1.0.1 - Modificación CreateCategory en Formularios.js_
```
   Implementación de la llamada a la función AddDataAssing pasandolé los diferentes
   parámetros en la function createCategory para que cuando creemos una nueva categoría
   aparte de crearse en el almacen Categories de la base de datos también se cree en 
   el almacen AssignCategories
```
