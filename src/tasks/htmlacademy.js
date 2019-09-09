function getDocumentsNumbers(array, year) {
    var amount = 0;
    for(i in array) {
         amount = array.indexOf(year, -4) != -1 ? amount++ : amount;
    }
    return amount;

}

const func = (id) => { console.log(id) };

const arrr=() => {
    return func(7);
}
func.bind(null, 7);
