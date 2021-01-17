# KC BootCamp Web X. Introdución a JS
# Fco Ríos.

Este repositorio contiene la práctica de este módulo a partir de un fork del código realizado y explicado en clase por [Alberto Casero](https://github.com/kasappeal).

La propiedad **`eresPatriota`** del objeto **`config`**, configurable en el index, mostrará tu verdadero amor por la madre patria...

Características no requeridas que se han implementado:

- Hay 3 clases, `League.js`, `PointsBasedLeague.js` y `WorldCupPlayOffs.js`. Las dos últimas extienden de la primera y se han intentado separar los métodos más propios de la fase de grupos y de la fase de eliminatorias de la competición en sus clases respectivas.
- Los equipos participantes provienen de una API de países externa. Una vez obtenido el dataset de países, éste se 'cocina' y se eligen aleatoriamente los 32 participantes. 
  `getCountriesFromAPI()`, en `teams.js`
- Criterios de clasificación: (ver `getStandings` en `PointsBasedLeague.js`
  - 1. Puntos
  - 2. Si hay triple o cuádríple empate:
    - 2.1 - Diferencia de goles
    - 2.2 - Orden alfabético
  - 3. Si no hay triple o cuádriple empate
    - 3.1 Enfrentamiento directo entre los equipos empatados.
    - 3.2 Diferencia de goles
    - 3.3 - Orden alfabético 
- Los enfrentamientos de la primera ronda de la fase de eliminatorias (octavos de final), será cruzando los primeros de grupo contra los segundos de grupo entre grupos contiguos (Grupo A vs Grupo B, Grupo C vs Grupo D, etc.). Ver `roundDraw()` en `WorldCupPlayOffs.js`.
- ​Dos equipos que se hayan encontrado en la fase de grupos, no podrán volver a encontrarse en la fase de eliminatorias hasta la final. Para garantizar esto, los primeros equipos de los grupos A, B, C y D y los segundos equipos de los grupos E, F, G y H, irán por un lado de del cuadro, y los primeros equipos de los grupos E, F, G y H y los segundos equipos de los grupos A, B, C y D irán por otro lado del cuadro. También anterior método `roundDraw()` en `WorldCupPlayOffs.js`.
- **Si no cambias la configuración por defecto, España siempre será campeona del mundo, como debe ser.** (`index.js`, línea 12 `const config = { rounds: 1, eresPatriota: true };`)