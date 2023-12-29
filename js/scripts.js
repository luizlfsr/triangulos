const primeiro_lado = document.querySelector("#input1");
const segundo_lado = document.querySelector("#input2");
const terceiro_lado = document.querySelector("#input3");
const output = document.querySelector('#output')

function VerificarTriangulo() {
  let PrimeiroLado = parseFloat(primeiro_lado.value);
  let SegundoLado = parseFloat(segundo_lado.value);
  let TerceiroLado = parseFloat(terceiro_lado.value);

  if (PrimeiroLado + SegundoLado > TerceiroLado && SegundoLado + TerceiroLado > PrimeiroLado & PrimeiroLado + TerceiroLado > SegundoLado) {
    console.log('possivel')
    output.value = 'possivel'
  } else {
    console.log('impossivel')
    output.value = 'impossivel'
  }
}
