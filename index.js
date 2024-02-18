//create function myEach

const myEach = (collection, callback) => {

    if (typeof collection === 'object' && !Array.isArray(collection)) {
        const values = Object.values(collection)

        for (let i = 0; i < values.length; i++) {
            callback(values[i])
        }

    } else {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i])
        }
    }

    return collection

}

//myMap

const myMap = (collection, callback) => {
    let newArray = []
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        const values = Object.values(collection)

        for (let i = 0; i < values.length; i++) {
            newArray.push(callback(values[i]))
        }
    } else {

        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]))
        }
    }

    return newArray
}

//myReduce

const myReduce = (collection, callback, acc = -2) => {
    let total = acc

    if (typeof collection === 'object' && !Array.isArray(collection)) {
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            total = callback(total, values[i], collection);
        }
    } else {
        for (let i = 0; i < collection.length; i++) {
            total = callback(total, collection[i], collection);
        }
    }

    return total;
};

//myFind
const myFind = (collection, predicate) => {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        const values = Object.values(collection)

        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i])) {
                return values[i]
            }
        }
    } else {

        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i]
            }
        }
    }
}

//filter()

const myFilter = (collection, predicate) => {
    const newArray = []
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        const values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i])) {
                newArray.push(values[i])
            }
        }

    } else {

        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                newArray.push(collection[i])
            }
        }

    }

    return newArray

}

const mySize = (collection) => {
    let counter = 0
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        const values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
            counter++
        }
    } else {
        for (let i = 0; i < collection.length; i++) {
            counter++
        }
    }

    return counter
}

const myFirst = (array, n) => {
    if (n && n > 0) {
        return array.slice(0, n);
    } else {
        return array[0]
    }
}

const myLast = (array, n) => {
    if (n && n > 0) {
        return array.slice(-n);
    } else {
        return array[array.length - 1]
    }
}

const myKeys = (object) => {
    return Object.keys(object)

}

const myValues = (object) => {
    return Object.values(object)
}