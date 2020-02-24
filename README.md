# VALIDACIÓN PARA PAGOS ONLINE DE SERVICIOS ACADEMICOS DE LA UNAMBA

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Vista del proyecto final](#2-vista-del-proyecto-final)
* [3. Usuarios y objetivos del producto](#3-usuarios-y-objetivos-del-producto)
* [4. Cómo soluciona los problemas/necesidades de los usuarios](#4-cómo-soluciona-los-problemas/necesidades-de-los-usuarios)
* [5. Primer prototipo en papel](#5-primer-prototipo-en-papel)
* [6. Resumen del feedback recibido indicando las mejoras a realizar](#6-resumen-del-feedback-recibido-indicando-las-mejoras-a-realizar)
* [7. Imagen del prototipo final](#7-imagen-del-prototipo-final)

## 1. Resumen del proyecto

Con este proyecto se podrá validar si una tarjeta es válida o no, para realizar los pagos de los diferentes servicios académicos de la UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURIMAC. 
  * Pagos (matricula, cursos extracurriculares, tramite de algún documento, comedor, grados/títulos, etc)

## 2. Vista del proyecto final

![vista del proyecto final credit card](https://github.com/roxanaguerra/LIM012-card-validation/blob/master/src/img/DISE%C3%91O%20FINAL%20CREDIT_CARD.JPG)

## 3. Usuarios y objetivos del producto

Los usuarios principales del producto son los **ESTUDIANTES** de las diferentes facultades de dicha
Universidad, ya que ellos se beneficiaran directamente del producto. Como otros usuarios también está el personal académico  y administrativo.

### Objetivo Principal

El objetivo principal del producto es **validar** si la tarjeta que está ingresando el usuario es válida o no para realizar un pago y así **facilitar** al usuario a realizar cualquier pago requiera, sin necesidad de acercarse a un banco u oficina de tesorería.

### Objetivos Secundarios

* Ver si la tarjeta esta apta para usarcé.
* Verificar fecha de caducidad.	
* Enmascarar el número de la tarjeta (seguridad).

## 4. Cómo soluciona los problemas/necesidades de los usuarios

* Los estudiantes tendrán más facilidad para poder realizar cualquier pago que deseen, (matriculas, pensiones, cursos extras, grados, documentos, etc.)
* Podrán realizar el pago 24/7, ya no tendrán que hacerlo solo en un cierto rango de tiempo (atención en el banco o tesorería de la Universidad).
* Es el ahorro de tiempo para el usuario.
*	El usuario se evitara hacer largas colas.
*	Los Trámites serán más rápidos y eficientes.

## 5. Primer prototipo en papel

![prototipo en papel](https://github.com/roxanaguerra/LIM012-card-validation/blob/master/src/img/FIGMA%20CREDIT_CARD.PNG)

## 6. Resumen del feedback recibido indicando las mejoras a realizar

 * En la parte que me estaba dificultando era para limitar mi input que solo ingrese una cierta cantidad de dígitos (en este caso 16), yo estaba probando de diferentes manera y ninguna me funcionaba y había un atributo 'maxlength' que era más rápido que estar intentando programar bucles u otras cosas sin ningún buen resultado, y una coach me ayudo en eso.
 
* Otra cosa también que me estaba dificultando era ingresar solo números al input, bloquear el ingreso de letras, igual estaba buscando información y encontré un input de type=' number ' que solo ingresaba números, pero con esta etiqueta no se podía usar el ‘maxlength’. Una coach me dijo que averigüe expresiones regulares, buscando y buscando mi compañera de Squad encontró algo que nos ayudó y hacer que un input de type='text' podamos limitarlo a que solo se ingrese números.

*Como una recomendación mía seria, todas las chicas tenemos dudas y sé que hay dudas que se deben de repetir mucho y hasta estar errando en lo mismo, y si se ve que las chicas o la mayoría sigue con eso, hacer como una recomendación general y así todas poder re direccionarnos de nuevo.*


## 7. Imagen del prototipo final

![prototipo final](https://github.com/roxanaguerra/LIM012-card-validation/blob/master/src/img/FIGMA%20CREDIT_CARD.PNG)
