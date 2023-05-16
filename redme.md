# Codigo de colores
Esto es un programa que pretende ayudar a los instaladores de fibra optica.
Mediante una sencilla interfaz puedes seleccionar compañia y tipo de cable, introducir un numero y te dara los colores tanto del tubo como de la fibra.

## Changelog
### 16/05/2023
Añadimos la compañia ALPI francesa.
### 11/05/2023
- Se ha añadido un popup informativo y botones para poder abrirlo y cerrarlo.
    - En el popup se explica brevemente como usar la app y el significado de los simbolos.
- Se ha modificado los botones de borrar y buscar para que ocupen menos.
### 07/05/2023
- Se ha añadido para todas las fibras el numero de tubo en el que estas cuando su color se repite.
- Se ha añadido la información sobre el cable 144 francia en referencia a los tubos.
- Se ha cambiado el mensaje para tubos repetidos y fibras repetidas de color
- Se ha hecho el calculo en el titulo de numero de fibra por tubo

### 06/05/2023
- Se ha modificado la forma en la que se dibujaban las pintas de la fibra cuando el color se repetia, ya que estaba mal construido
- Se han rehecho los datos de las tablas, ya que no corresponian con la realidad los colores de tubos y fibras.


## TODO ✔️
- [x] Hay tubos que repiten color dos o tres veces seguidas.
    - [x] Determinar en que numero de repetición estas >/// />// //>/.
- [x] Refactorizar el codigo para que las funciones sean mas limpias y sin parametros.
    - [x] Ordenar los metodos, hacer que solo tengan una funcionalidad.
- [x] 144 falta información para la repetición de pintas y tubos.
- [x] Añadir el numero de tubos y de fibras para cada compañia
- [ ] Hacer test para comprobar que todo funciona correctamente
    - [ ] Cypress ?
