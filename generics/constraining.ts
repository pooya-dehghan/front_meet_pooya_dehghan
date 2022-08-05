//constraining type 3
type N =  string


class Concatenator<T extends Array<N>> {

  //make it which array contains either string or boolean
  public concatenateArray(items: T): string {
    let returnString = '';
    for (let i = 0; i < items.length; i++) {
      //
      returnString += i > 0 ? ',' : '';
      returnString += items[i].toString();
    }
    return returnString;
  }
}

let concator = new Concatenator();

let concatResult2 = concator.concatenateArray(['hel', 'lo', 'wo', 'rld']);
// let concatResult = concator.concatenateArray([1, 2, 3, 4, 5 , "hello"]);
// let concatResult2 = concator.concatenateArray(['hel', 'lo', 'wo', 'rld']);
// let concatResult3 = concator.concatenateArray(['hel' , true , 'wo' , 'true']);

// console.log('concatResult: ', concatResult);
console.log('concatResult2: ', concatResult2);
