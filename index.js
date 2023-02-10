const numbers = []
const math_operator = ['+', '-', '*', '/']
let operator = ''
let count = 0
let n = 1
let i = 0
do {
    operator = prompt("Enter operator +, -, *, /");
} while (math_operator.includes(operator) === false)

do {
    count = Number(prompt("Enter operands count"));
} while (count < 2 || count > 4)


numbers.length = count
// for (let i = 0, n = 1; i !== (count);i++, n++) {
for (let elem of numbers){
    do {
        numbers[i] = Number(prompt(`Enter operand №${n}`));
    } while (isNaN(numbers[i]) === true)
    n++
    i++
}

console.log(numbers)

let result = Number(numbers[0])
let condition = String(numbers[0])

const calc_elem = {
    add : function (numbers) {
        for (let i = 1; i !== (count); i++) {
            result = result + numbers[i];
            condition = condition + ' + ' + numbers[i]
        }
    },
    sub : function (numbers) {
        for (let i = 1; i !== (count); i++) {
            result =  result - numbers[i]
            condition = condition + ' - ' + numbers[i]
        }
    },
    mul : function (numbers) {
        for (let i = 1; i !== (count); i++) {
            result =  result * numbers[i]
            condition = condition + ' * ' + numbers[i]
        }
    },
    div : function (numbers) {
        for (let i = 1; i !== (count); i++) {
            result = result / numbers[i]
            condition = condition + ' / ' + numbers[i]
        }
    }
}

switch (operator) {
    case `+` :
        calc_elem.add(numbers);
        break;
    case `-` :
        calc_elem.sub(numbers);
        break;
    case `*` :
        calc_elem.mul(numbers);
        break;
    case `/` :
        calc_elem.div(numbers);
        break;
}

console.log('result =', result)
console.log('result =', condition)
alert(`${condition} = ${result}`)