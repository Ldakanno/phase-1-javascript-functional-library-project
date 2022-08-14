function myEach(collection, alert) {
    const arr = Object.values(collection)
    arr.forEach(element => alert(element))
    return collection
}

function myMap(collection, callback) {
    const arr = Object.values(collection)
    return arr.map(element => callback(element))
}

function myReduce(collection, callback, ...acc) {
    let arr = Object.values(collection)
    let newAcc;
    let i;
    let total = 0;
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }

    for (i; i < arr.length; i++) {
        newAcc = callback(newAcc, arr[i], collection)
    }
    return newAcc
}

function myFind(collection, predicate) {
    const arr = Object.values(collection)
   return arr.find(element => {
        element === predicate ? element : false
    })
    
}

