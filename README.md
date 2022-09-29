# ctd-esp-fe1-final
Examen Final de Frontend IV Digital House
## Requisitos

```
# clona el repositorio del final en tu computadora
git clone https://github.com/DH-Esp-Frontend/ctd-esp-fe1-final 

# ingresa al directorio del final
cd ctd-esp-fe1-final

# elimina los links al repositorio de DH
git remote rm origin

# Agrega el link al repositorio de tu cuenta de github, reemplaza <tuusuario> por tu cuenta
git remote add origin https://github.com/<tuusuario>/ctd-esp-fe1-final

# Sube el template inicial a tu repositorio de github
git push -u origin main
```

## Funcionalidades

### Funcionalidades obligatorias

Las siguientes funcionalidades son requisitos mínimos necesarios para la aprobación del final y es fundamental que funcionen correctamente.
 
* La aplicación deberá contar con dos páginas:

  1 - La página de inicio que debe contar con:

          * Panel de filtros:
            * Contendrá un input en donde el usuario pueda ingresar cualquier texto que desee para hacer un filtro sobre los personajes.
            * Si el usuario borra el texto ingresado, se deberá mostrar el estado inicial, es decir la búsqueda sin filtro.
            * Se deberá incluir un boton de "Limpiar filtros", el cual deberá borrar el texto dentro del input y mostrar el estado inicial, es decir la búsqueda sin filtro.

          * Listado de personajes
            * Deberá mostrar los personajes, que estarán representados por tarjetas con información sobre cada uno de ellos.
            * Como máximo se deben mostrar en pantalla 20 tarjetas de personajes por página.
            * Se deberá poder marcar y desmarcar a cada personaje como favorito desde su tarjeta individual, teniendo que persistir ese estado en la aplicación.
            * Se deberá poder diferenciar si un personaje se encuentra marcado como favorito o no.

  2 - La página de favoritos que deberá cumplir con los siguientes requisitos:

            *  Todos los personaje marcados como favoritos, deberán aparecer dentro del listado de favoritos en la segunda página de la aplicación.
            *  Si el usuario desmarca un personaje como favorito el mismo deberá desaparecer del listado de favoritos.
            *  Un personaje que haya sido desmarcado de los favoritos, podrá ser marcado nuevamente desde la pantalla de inicio y deberá aparecer en el listado otra vez.
    

### Funcionalidades extras

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su funcionamiento sea correcto:

    * La página de favoritos:
      * Podrá contar con un botón de "Eliminar todos", que deberá desmarcar todos los personajes del listado de favoritos y los mismos no deberán aparecer marcados como favoritos en la página principal.

    * Realización de una tercer página de vista de cada personaje:
    Al hacer click sobre un personaje deberá redirigirnos a está página.
        * Va a requerir de la invocación de la API de [Episodios](https://rickandmortyapi.com/documentation/#get-multiple-episodes) de Rick and Morty.
        * Dentro de la vista de cada personaje:
           * Se mostrará un listado de los episodios en los cuales aparece.
           * También podríamos indicar si el personaje está marcado como favorito o no, y junto con la posibilidad de marcarlo o desmarcarlo.

## Desarrollo

### Iniciando la App

Instalamos las dependencias

`npm install`

Iniciar la aplicación

`npm run start`

### Dependencias

Se utilizara la version de React 17.0.2, junto con la version 5 de React Scripts. React-Router ya se encuentra instalado y configurado para la navegación.

Solo se podrán instalar las siguientes dependencias:
* Redux (incluida @reduxjs/toolkit)
* Typescript
* Thunk

**NOTA: El uso de React Query y de la API de Context (React) no esta permitido**

### Componentes de UI

Lista de componentes:
* [src/componentes/layout/encabezado.componente.jsx](src/componentes/layout/encabezado.componente.jsx) - Encabezado requerido para cada una de las páginas. Facilita la navegación
* [src/componentes/personajes/filtros.componente.tsx](src/componentes/personajes/filtros.componente.tsx) - Componente con el input text para realizar el filtrado
* [src/componentes/personajes/grilla-personajes.componente.jsx](src/componentes/personajes/grilla-personajes.componente.jsx) - Grilla de personajes para la pagina de inicio
* [src/componentes/personajes/tarjeta-personaje.componente.tsx](src/componentes/personajes/tarjeta-personaje.componente.tsx) - Tarjeta para cada personaje dentro de la grilla de personajes.
* [src/componentes/botones/boton-favorito.componente.jsx](src/componentes/botones/boton-favorito.componente.jsx) - Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
* [src/componentes/episodios/tarjeta-episodio.componente.tsx](src/componentes/episodios/tarjeta-episodio.componente.tsx) - Tarjeta para cada episodio dentro de la vista de personaje.

## Guía para comenzar

### Instalación

Instalar Typescript

`npm install typescript@4.6.3`

Instalar Tipos de React

`npm install --dev @types/node@16.11.26 @types/react@17.0.43 @types/react-dom@17.0.14`

Instalar Redux

`npm install react-redux@7.2.6 @types/react-redux@7.1.23 @reduxjs/toolkit`

Y finalmente instalar Thunk

`npm install redux-thunk@2.4.1`


