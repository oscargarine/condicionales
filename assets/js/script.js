
/* Ejercicio 1 */
const imagen = document.querySelector('img')
imagen.addEventListener('click', () => {
if(imagen.style.border === '2px solid red'){
  imagen.style.border = ''
} else {
  imagen.style.border = '2px solid red'
}
})

/* Ejercicio 2 */
/* debugger */
const inputChihiro = document.querySelector('#chihiro')
const inputSinCara = document.querySelector('#sin-cara')
const inputChihiroHaku = document.querySelector('#chihiro-haku')

const botonCalcular = document.querySelector('.calcular')
const txtResultado =  document.querySelector('.total-stickers')



botonCalcular.addEventListener('click', () => {
  const valorChihiro = Number(inputChihiro.value)
  /* console.log(valorChihiro) */

  const valorSinCara = Number(inputSinCara.value)
  /* console.log(valorSinCara) */

  const valorChihiroHaku = Number(inputChihiroHaku.value)
  /* console.log(valorChihiroHaku) */

  const totalStickers = valorChihiro + valorSinCara + valorChihiroHaku
  /* console.log(totalStickers) */
  if (totalStickers <= 10){
    txtResultado.innerHTML = totalStickers
  }else{
    txtResultado.innerHTML = "Excedes la cantidad máxima de stickers permitidos"
  }

})

/* Ejercicio 3 */
const selectPrimerNumero = document.querySelector('.primerNumero')
const selectSegundoNumero = document.querySelector('.segundoNumero')
const selectTercerNumero = document.querySelector('.tercerNumero')

const botonComprobar = document.querySelector('.comprobarNumero')
const statusPassword = document.querySelector('.statusPassword')

botonComprobar.addEventListener('click', () => {
  const valorPrimerNumero = selectPrimerNumero.value
  const valorSegundoNumero = selectSegundoNumero.value
  const valorTercerNumero = selectTercerNumero.value

  let passwordEnviada = valorPrimerNumero + valorSegundoNumero + valorTercerNumero
  console.log(passwordEnviada)
  if (passwordEnviada == "911"){
    statusPassword.innerHTML = "Password 1 correcto"
  }else if(passwordEnviada == "714"){
    statusPassword.innerHTML = "Password 2 correcto"
  }else{
    statusPassword.innerHTML = "Password Incorrecto"
  }
})