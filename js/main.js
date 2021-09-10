console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
var myNum = 10;


// имя переменной: myStr, значение: 'строка'
var myStr = "str"


// имя переменной: myBool, значение: true
var myBool = "true"


// имя переменной: myArr, значения: 1, 2, 3, 4, 5

var myArr = [1, 2, 3, 4, 5]

// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj{
    first: 'First Name',
    last: 'Last Name'   

};
console.log( myNum);
console.log(myStr);
console.log( myBool);
console.log(myArr);
console.log(myObj);

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
var myNum = (10);

console.log(myNum.toFixed(2));
// decimal2
10.00
/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */
var i = 10;
console.log(++i);
console.log(i++);

console.log(--i);
console.log(i--);

// i

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
var myTest = 10;
console.log(myTest)

// +=
myTest += 10;
console.log(myTest)

// –=
myTest -= 5;
console.log(myTest)

// *=
myTest *= 3;
console.log(myTest)

// /=
myTest /= 3; 
console.log(myTest)

// %=
myTest %= 2;
console.log(myTest)

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */


// константа Pi → myPi
var myPi = Math.PI;
console.log(myPi);

// округленное значение числа 89.279 → myRound
var myRound = Math.round(89.279);
console.log(myRound(89.279));

// случайное число между 0..10 → myRandom
var myRandom = Math.random() * 10;
console.log(myRandom()*10);

// 3 в 5 степени → myPow
var myPow = Math.pow(3, 5);
console.log(myPow(3,3));
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */
var strObj = str("Мама мыла раму, рама мыла маму")

// Мама мыла раму, рама мыла маму
console.log(str.length);

// strObj

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 * 
 */
var strObj = str("Мама мыла раму, рама мыла маму")
console.log(strObj.replace('Мама моет раму, Рама держит маму'));

// strReplace
strObj = strObj.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму')
console.log( strObj.replace)
/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
var strObj = str("Мама мыла раму, рама мыла маму")
console.log(strObj.toUpperCase());
console.log((strObj.toLowerCase());