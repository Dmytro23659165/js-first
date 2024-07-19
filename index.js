let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`Температура в Цельсіях: ${celsius}°C`);
console.log(`Температура в Фаренгейтах: ${fahrenheit}°F`);


let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Кількість днів у місяці: ${daysInMonth}`);
console.log(`Кількість годин у місяці: ${hoursInMonth}`);
console.log(`Кількість хвилин у місяці: ${minutesInMonth}`);


let health = 100;
let energy = 75;
let damage = 20;
let energyLoss = 15;
health -= damage;
energy -= energyLoss;
console.log(`Рівень здоров'я гравця: ${health}`);
console.log(`Рівень енергії гравця: ${energy}`);


let purchaseAmount = 200;
let discount = 0.10;
let discountedAmount = purchaseAmount * (1 - discount);
console.log(`Сума покупки до знижки: ${purchaseAmount}`);
console.log(`Сума покупки після знижки: ${discountedAmount}`);


let floatingNumber = 7.85;
let roundedDownNumber = Math.floor(floatingNumber);
console.log(`Число з плаваючою комою: ${floatingNumber}`);
console.log(`Число після округлення до меншого: ${roundedDownNumber}`);


let stringWithFloat = "123.45";
let floatNumber = parseFloat(stringWithFloat);
console.log(`Рядок: ${stringWithFloat}`);
console.log(`Десяткове число: ${floatNumber}`);


let stringWithInteger = "12345";
let integerNumber = parseInt(stringWithInteger, 10);
console.log(`Рядок: ${stringWithInteger}`);
console.log(`Ціле число: ${integerNumber}`);


let number = 144;
let squareRoot = Math.sqrt(number);
console.log(`Число: ${number}`);
console.log(`Квадратний корінь числа: ${squareRoot}`);


let integerValue = 12345;
let stringWithNumber = "67890";
let parsedInteger = parseInt(stringWithNumber, 10);
let stringFromInteger = integerValue.toString();
console.log(`Рядок з числом: ${stringWithNumber}`);
console.log(`Перетворений на ціле число: ${parsedInteger}`);
console.log(`Цілочисельне значення: ${integerValue}`);
console.log(`Перетворене на рядок: ${stringFromInteger}`);