//generic syntax 1

function printGeneric<T>(value : T){
  console.log(`type of T is: ${typeof value}`);
  console.log(`value is: ${value}`);
}

printGeneric(1);
printGeneric([1,2,3,4]);
printGeneric("test");
printGeneric({id : 1});


printGeneric<string>('my second test');
printGeneric<number>(1);