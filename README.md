# Amigo Secreto

Este proyecto es una aplicación web sencilla para organizar un sorteo de "Amigo Secreto" entre amigos. Permite ingresar nombres, mostrarlos en una lista y sortear aleatoriamente un amigo secreto para cada participante.

## Estructura del Proyecto

```
app.js
index.html
style.css
assets/
    amigo-secreto.png
    play_circle_outline.png
```

## ¿Cómo funciona?

1. Ingresa los nombres de los participantes en el campo de texto(que dice "escribe un nombre") y haz clic en "Añadir".
2. Los nombres se mostrarán en una lista.
3. Cuando todos los nombres estén agregados, haz clic en "Sortear amigo".
4. El sistema seleccionará aleatoriamente un nombre y lo mostrará durante 3 segundos.
5. El nombre sorteado se elimina de la lista para evitar repeticiones.
6. El proceso continúa hasta que todos los amigos hayan sido sorteados.

## Archivos principales

- [`index.html`](index.html): Estructura HTML de la aplicación.
- [`app.js`](app.js): Lógica JavaScript para agregar nombres y realizar el sorteo.

## Uso

Abre el archivo `index.html` en tu navegador y sigue las instrucciones en pantalla.

---

![Juego amigo secreto](./assets/jugando-amigo-secreto.gif)

![Manejo de errores](./assets/manejo-errores.gif)

[Ver video completo](./assets/challenge-amigo-secreto.mp4)