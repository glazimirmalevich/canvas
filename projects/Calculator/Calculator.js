// 1. Сделайте калькулятор, который будет находить площадь и периметр квадрата.

class Calculator {
    #pi = 3.14;
    constructor(length, width, radius){
        this.length = length;
        this.width = width;
        this.radius = radius;
    }
    getArea = () => {
        return this.length ** 2;
    }
    getPerimeter = () => {
        return this.length + this.length + this.length + this.length;
    }
    getRectangleArea = () => {
        return this.length * this.width;
    }
    getRectanglePerimeter = () => {
        return (this.length + this.width) * 2;
    }
    getCircleArea = () => {
        return this.#pi * (this.radius ** 2);
    }
    getCircleLength = () => {
        return (this.#pi * 2) * this.radius;
    }
}

const qwe = new Calculator(9, 7, 6);

console.log(qwe.getCircleArea());

// 2. Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

// 3. Сделайте калькулятор, который будет находить площадь круга и длину окружности.

// 4. Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.


// ; Подключение своей АТС через SIP в месяц стоит 5 тыс тенге.
// ; Нужны данные Транка