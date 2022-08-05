// multiple Generic 2

function usingTwoTypes<A , B>(valueFirst: A , valueSecond : B){
  console.log(`first type is : ${typeof valueFirst} , second type is ${typeof valueSecond}`);
}

usingTwoTypes<number , string>(1 , 'hello');
usingTwoTypes(2 , 'good bye');
// usingTwoTypes<boolean , boolean>(true , 'hello');