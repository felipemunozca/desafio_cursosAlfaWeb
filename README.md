# Curso Desarrollo de Aplicaciones Front-end Trainee 2023
Evaluación Final del Modulo 7 - Desarrollo de Aplicaciones Front-End con Framework Vue

## REQUERIMIENTOS:
1. Para el cumplir con el objetivo necesitamos en primera instancia:
    - Crear un proyecto Vue que implemente Vue Roter y Vuex.
    - Se debe desplegar una interfaz principal “Home” donde se muestran todos los cursos que se encuentren en el state mediante 
    tarjetas o cards.
    - Igualmente, debe existir un menú de navegación o “NavBar” donde se muestre home y administración 


2. Crear una interfaz que permita administrar los cursos. Para acceder a ella se debe hacer mediante el menú de navegación 
“NavBar” o menú lateral con los nombres de las rutas disponibles. Asimismo, la interfaz de administración debe desplegar una 
tabla con el listado de cursos disponibles en el state. Además, debe tener botones o enlaces que permitan agregar, eliminar 
y/o editar cursos.

3. Por otra parte, en la interfaz de administración se deben mostrar diversos mensajes de carácter informativo, los cuales, 
deben indicar:
    - Cantidad total de alumnos permitidos.
    - Cantidad total de alumnos inscritos.
    - Cantidad total de cupos restantes.
    - Cantidad total de cursos terminados.
    - Cantidad total de cursos activos.
    - Cantidad total de cursos.

4. El botón o enlace para agregar un nuevo curso ubicado en la interfaz de administración debe ejecutar una ventana emergente 
o modal al hacerle un clic. Esta ventana emergente o modal debe contener un formulario que permite agregar todos los datos 
(nombre, URL de la imagen del curso, cupos, inscritos, duración, costo y descripción) el cual tendrá dos (02) botones que serán
“Cancelar” y “Agregar”. Si el usuario presiona “Cancelar”, el modal deberá desaparecer. En cambio, si el usuario presiona “Agregar”, 
se deben actualizar todas las interfaces que muestran los cursos. 

5. Para agregar un nuevo curso se deben tomar en cuenta algunas características:
    - La cantidad de inscritos no debe ser mayor que la cantidad de cupos disponibles. Por lo tanto, se debe mostrar un error 
    si esto ocurre y no se debe permitir agregar el curso.
    - El estado del curso (terminado) por defecto será falso (false).
    - La fecha de registro del curso será la que tome el sistema al momento de realizar el registro.

6. Para eliminar cursos se debe desplegar una ventana emergente, modal, popup o alert que nos pregunte si realmente se desea eliminar 
el curso seleccionado, que tendrá dos (2) botones que serán “Cancelar” y “Aceptar”. Si el usuario hace un clic sobre “Cancelar”, el 
modal deberá desaparecer. En cambio, si el usuario presiona “Aceptar”, el sistema deberá eliminar el curso. Actualizando al instante 
todas las vistas que muestran información sobre los cursos. 

7. Para editar cursos, el usuario debe hacer un clic sobre el botón, enlace o icono relacionado al curso que desea editar mostrado 
en la interfaz de administración, para así redirigir al usuario a la interfaz de edición.

8. En la interfaz de editar cursos, se debe desplegar un formulario con la información precargada del curso que se desea editar, 
dando la oportunidad al usuario de editar todos los campos del curso:
    - Nombre (string)
    - URL de la imagen (string)
    - Cupos del curso (número)
    - Inscritos (número)
    - Costo (número)
    - Duración del curso (string)
    - Descripcion (string)
    - Fecha de Registro (fecha)
    - Estado (booleano)

9. La interfaz de edición tiene algunas características que se deben tomar en cuenta al momento de editar un curso:
    - La cantidad de inscritos no debe ser mayor que la cantidad de cupos disponibles, por lo tanto, se debe mostrar un error 
    si esto ocurre y no se debe permitir la actualización del curso.
    - Si se modifica el estado del curso de activo ha terminado (cerrado), la cantidad de inscritos debe automáticamente modificarse 
    a cero.

10. Al actualizar el curso, el sistema deberá actualizar todas las vistas que muestran los cursos instantáneamente y retornando 
al usuario a la vista de administración automáticamente.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
