//Хочу сказать сперва, что материал и задания построенны очень сложно и не корректно, с этим согласны даже менторы, и задания даются не по данному материалу а следующему...Т.е задание в модуле "2", а его материал в модуле 

let age = prompt('Введите ваш возраст','')
if (isNaN(age % 2)) {
    alert('Error, вы ввели не число!')
} else if (age % 2 === 0) {
    alert('число четное')
} else {
    alert('число нечетное')
}
