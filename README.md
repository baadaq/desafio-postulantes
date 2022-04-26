# Desafio Postulantes

Con el fin de seleccionar a nuestros 2 developers, tenemos el siguente desafio.

De la siguente URL [Link](https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.html) es necesario crear un código que sea capaz de parsear la pagina web y devolver un json con esta información.
![image](https://user-images.githubusercontent.com/3030497/164536276-9eb79d10-4fb0-4943-a15f-2536a8586330.png)

El JSON de respuesta puede venir en el formato que estimes conveniente.

## Preguntas Frecuentes

- Tipos de entrega, cualquiera de los siguiente sirve
  - API caso generico
  - API caso particular
  - Script para el caso particular
- Lenguaje: El que más te guste
- Plazo de Entrega: Indefinido, iremos entrevistando a los que van terminando primero.  

-----
### Respuesta  
-El estupido node cargo chromium en los node_modules y me iba a buscar el archivo a usr/....(pesaba 300mb).  
-Esta un script que lo muesta ordenado en terminal, alguno los extraje solo con innerText y otros con innerHtml.  
-El txt test tiene un parseado bruto completo de la pagina.  
-Casi lo olvido, todo fue realizado con nodejs y puppeteer( me termino cargando un vue-router, no se de donde salio, es decir uso vue pero simplemente 
cree una app basica en js con node).  

-----
#### EDIT
- La rejodi, parsee la pagina completa, eso si dentro del script esta el parseo ordenado de los datos requeridos (como innerHTML).
- Para ejecutar el codigo es utilizar node parseSII.js.
- puppeteer es una api que permite recolectar info a traves del template de la pagina y retorna objetos.
