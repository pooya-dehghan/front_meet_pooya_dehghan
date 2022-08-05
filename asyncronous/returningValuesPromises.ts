// in previous example we had promise of type void which meant
//we did not provide any input for resolve function and it was void
//no maybe we need to return a vlue to user via then function .then((value) => console.log(value))
//here our promise is not of type void rather it is using value type ...

function returnValuesPromises(hasError: boolean): Promise<string> {
  return new Promise<string>(
    (resolve: (value: string) => void, reject: (value: number) => void) => {
      if (hasError) reject(500);
      resolve("7989");
    }
  );
}

returnValuesPromises(false).then((value) => console.log('value: ', value));
returnValuesPromises(true)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
