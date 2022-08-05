//constraining type 3
var Concatenator = /** @class */ (function () {
    function Concatenator() {
    }
    //make it which array contains either string or boolean
    Concatenator.prototype.concatenateArray = function (items) {
        var returnString = '';
        for (var i = 0; i < items.length; i++) {
            //
            returnString += i > 0 ? ',' : '';
            returnString += items[i].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
var concator = new Concatenator();
var concatResult = concator.concatenateArray([1, 2, 3, 4, 5, "hello"]);
var concatResult2 = concator.concatenateArray(['hel', 'lo', 'wo', 'rld']);
// let concatResult2 = concator.concatenateArray(['hel', 'lo', 'wo', 'rld']);
// let concatResult3 = concator.concatenateArray(['hel' , true , 'wo' , 'true']);
console.log('concatResult: ', concatResult);
console.log('concatResult2: ', concatResult2);
