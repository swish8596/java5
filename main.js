
var num1 = parseFloat(prompt("Введите первое число:"));
var num2 = parseFloat(prompt("Введите второе число:"));
var num3 = parseFloat(prompt("Введите третье число:"));


var middle;

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
    middle = num1;
} else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
    middle = num2;
} else {
    middle = num3;
}


alert(`Среднее число: ${middle}`);
