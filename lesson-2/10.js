// С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [2, 5, 9, 15, 0, 4];

////////////////// Решение //////////////////
 
const array = [2, 5, 9, 15, 0, 4];

for( let i = 0; i < array.length; i++ ){

  if(array[i] > 3){
    if(array[i] < 10){

      const element = array[i];

      console.log(element);
    }
  }
}