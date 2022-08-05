//lets declare a function to pass to new Promise class
function fnDelayedPromise(resolve, //rule promise
reject) {
    let error = false;
    if (error)
        reject();
    resolve();
}
function delayedResponsePromise() {
    return new Promise(fnDelayedPromise);
}
delayedResponsePromise().then(() => {
    console.log("hello world with 1 second delay");
}).catch(() => {
    console.log('good bye with a error');
});
