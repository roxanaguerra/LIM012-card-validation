# VALIDACIÓN DE CREDIT CARD PARA PAGOS ONLINE DE SERVICIOS ACADEMICOS DE LA UNAMBA

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Vista del proyecto final](#2-vista-del-proyecto-final)
* [3. Investigación UX](#3-investigación-UX)
* [4. Primer prototipo en papel](#4-primer-prototipo-en-papel)
* [5. Resumen del feedback recibido indicando las mejoras a realizar](#5-resumen-del-feedback-recibido-indicando-las-mejoras-a-realizar)
* [6. Imagen del prototipo final](#6-imagen-del-prototipo-final)
* [7. Objetivos de Aprendizaje](#7-objetivos-de-aprendizaje)


## 1. Resumen del proyecto

Con este proyecto se podrá validar si una tarjeta es válida o no, para realizar los pagos de los diferentes servicios académicos de la UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURIMAC. 
  * Pagos (matricula, cursos extracurriculares, tramite de algún documento, comedor, grados/títulos, etc)

## 2. Vista del proyecto final

![vista del proyecto final credit card](https://github.com/roxanaguerra/LIM012-card-validation/blob/master/src/img/DISE%C3%91O%20FINAL%20CREDIT_CARD.JPG)

## 3. Investigación UX

### Usuarios

Los usuarios principales del producto son los **ESTUDIANTES** de las diferentes facultades de dicha
Universidad, ya que ellos se beneficiaran directamente del producto. Como otros usuarios también está el personal académico  y administrativo.

### Objetivo Principal

El objetivo principal del producto es **validar** si la tarjeta que está ingresando el usuario es válida o no para realizar un pago y así **facilitar** al usuario a realizar cualquier pago requiera, sin necesidad de acercarse a un banco u oficina de tesorería.

### Objetivos Secundarios

* Ver si la tarjeta esta apta para usarcé.
* Verificar fecha de caducidad.	
* Enmascarar el número de la tarjeta (seguridad).

### Cómo soluciona los problemas necesidades de los usuarios

* Los estudiantes tendrán más facilidad para poder realizar cualquier pago que deseen, (matriculas, pensiones, cursos extras, grados, documentos, etc.)
* Podrán realizar el pago 24/7, ya no tendrán que hacerlo solo en un cierto rango de tiempo (atención en el banco o tesorería de la Universidad).
* Es el ahorro de tiempo para el usuario.
*	El usuario se evitara hacer largas colas.
*	Los Trámites serán más rápidos y eficientes.

## 4. Primer prototipo en papel

![prototipo en papel](https://github.com/roxanaguerra/LIM012-card-validation/blob/master/src/img/PROTOTIPO%20EN%20PAPEL%20CREDIT%20CARD.jpg)

## 5. Resumen del feedback recibido indicando las mejoras a realizar

 * En la parte que me estaba dificultando era para limitar mi input que solo ingrese una cierta cantidad de dígitos (en este caso 16), yo estaba probando de diferentes manera y ninguna me funcionaba y había un atributo 'maxlength' que era más rápido que estar intentando programar bucles u otras cosas sin ningún buen resultado, y una coach me ayudo en eso.
 
* Otra cosa también que me estaba dificultando era ingresar solo números al input, bloquear el ingreso de letras, igual estaba buscando información y encontré un input de type=' number ' que solo ingresaba números, pero con esta etiqueta no se podía usar el ‘maxlength’. Una coach me dijo que averigüe expresiones regulares, buscando y buscando mi compañera de Squad encontró algo que nos ayudó y hacer que un input de type='text' podamos limitarlo a que solo se ingrese números.

*Como una recomendación mía seria, todas las chicas tenemos dudas y sé que hay dudas que se deben de repetir mucho y hasta estar errando en lo mismo, y si se ve que las chicas o la mayoría sigue con eso, hacer como una recomendación general y así todas poder re direccionarnos de nuevo.*


## 6. Imagen del prototipo final

![prototipo final](https://github.com/roxanaguerra/LIM012-card-validation/blob/master/src/img/FIGMA%20CREDIT_CARD.PNG)

## 7. Objetivos de Aprendizaje

### UX
* [X] [Diseñar la aplicación pensando y entendiendo al usuario](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
* [x] [Crear prototipos para obtener feedback e iterar](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/00-sketching/00-sketching)
* [X] [Aplicar los principios de diseño visual](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/01-visual-design/01-visual-design-basics)

### HTML y CSS
* [X] [Uso correcto de HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [X] [Uso de selectores de CSS](https://developer.mozilla.org/es/docs/Web/CSS/Selectores_CSS)
* [-] [Construir tu aplicación respetando el diseño realizado](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/css/01-css/02-boxmodel-and-display) (maquetación).

### DOM
* [X] [Uso de selectores de nodos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/03-1-dom-methods-selection)
* [X] [Manejo de eventos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/04-events)
* [-] [Manipulación dinámica del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)

### Javascript
* [X] [Manipulación de strings](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/06-strings/01-strings)
* [X] [Uso de condicionales](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/01-conditionals-and-loops)
* [X] [Uso de bucles](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/02-loops)
* [X] [Uso de funciones](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/javascript/02-flow-control/03-functions)
* [-] [Datos atómicos y estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [-] Utilizar ES Modules (`import` | `export`).

### Testing
* [X] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)

### Git y GitHub
* [X] [Comandos de git](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/01-git/04-commands)
  (`add` | `commit` | `pull` | `status` | `push`).
* [X] [Manejo de repositorios de GitHub](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/02-github/01-github)  (`clone` | `fork` | `gh-pages`).

### Buenas prácticas de desarrollo
* [X] Organizar y dividir el código en módulos (Modularización).
* [X] Uso de identificadores descriptivos (Nomenclatura | Semántica).
* [-] Uso de linter para seguir buenas prácticas (ESLINT).

