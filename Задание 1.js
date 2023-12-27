let age = prompt('Введите ваш возраст','')
if (isNaN(age % 2)) {
    alert('Error, вы ввели не число!')
} else if (age % 2 === 0) {
    alert('число четное')
} else {
    alert('число нечетное')
}
