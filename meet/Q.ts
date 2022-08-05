


function NeverAndVoid ( ) : void {
  throw new Error('theres an error') //can return null nad undefined
}

function anotherFn () : never {
//   return null
  throw new Error('theres an error in anotherFn');
}