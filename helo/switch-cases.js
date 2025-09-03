// Switch

const dia = prompt("Dia da semana (seg, ter, qua, qui...)")

switch (dia) {
    case "seg":
    case "ter":
    case "qua":
    case "qui":
    case "sex":
        console.log("Dia útil")
        break;
    case "sab":    
    case "dom":
        console.log("Fim de semana")
    default:
        console.log("Dia inválido")
};