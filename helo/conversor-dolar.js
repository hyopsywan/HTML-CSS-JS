const brlStr = (prompt("Digite um valor em BRL (use vírgola):"))
const usdRate = (prompt("Cotação do Dólar:"))

const brl = Number(brlStr.replace(",", "."));
const usd = brl / usdRate;

console.log(`R$ ${brl} = US$ ${usd.toFixed(2)}`);