//lets declare a function to pass to new Promise class

function fnDelayedPromise(
  resolve : () => void, //rule promise
  reject : () => void){
    let error = false;
    if(error) reject();
      resolve();
  }

  function delayedResponsePromise() : Promise<void> { //void type
    return new Promise<void>(fnDelayedPromise);
  }

  delayedResponsePromise().then((value) => {
    return value
  }).catch(() => {
    console.log('good bye with a error')
  })