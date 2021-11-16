const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

/*
  Надо написать функцию, которая будет принимать в себя массив
  и удалять элементы с нечетными индексами

  Функция должна вернуть исходный массив не пересоздавая его
*/

function filterArray(array) {
    let dCount = 0
    let len = array.length
    
    for (let i = 0; i < len; i++) {        
        if(i % 2 == 1){
            array.splice(i - dCount,1)
            dCount++
        }                  
    }

    return array
}

const filteredArray = filterArray(array);

console.log(filteredArray); // [0, 2, 4, 6, 8]

console.log(filteredArray === array); // true