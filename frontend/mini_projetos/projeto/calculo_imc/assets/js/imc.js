/* selecionar */

const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');

// função
const calcIMC = () => {

  //checando os campos
  if (altura.value !== '' && peso.value !== '') {
    //calculdo imc
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    let classificacao = ""

    if (imc < 18.5) {
      classificacao = 'Abaixo do Peso'
    } else if (imc < 25) {
      classificacao = 'Peso normal'
    } else if (imc < 30) {
      classificacao = 'Acima do Peso'
    } else if (imc < 35) {
      classificacao = 'Obesidade Grau I'
    } else if (imc < 41) {
      classificacao = 'Obesidade Grau II'
    } else {
      classificacao = 'Obesidade Grau III'
    }


    resultado.innerHTML = `${imc} (${classificacao})`
  } else {
    resultado.innerHTML = 'Preencher os campos !'
  }


}
