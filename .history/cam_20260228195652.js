let velocity = 1324;

let message = 
(velocity < 60) ? "Demasiado lento" :
    (velocity <= 80) ? "Velocidad adecuada" :
    (velocity <= 100) ? "Un poco rápido" :
    "Multa por exceso de velocidad"

console.log(message);

