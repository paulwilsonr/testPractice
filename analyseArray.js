function average(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum = sum + num;
    });
    return sum / arr.length;
};

function min(arr) {
    let minNum = arr[0];
    arr.forEach(num => {
        if (num < minNum) {
            minNum = num;
        }
    });
    return minNum;
};

function max(arr) {
    let maxNum = arr[0];
    arr.forEach(num => {
        if (num > maxNum) {
            maxNum = num
        }
    });
    return maxNum;

}


function analyseArray(arr) {
    arr.forEach(element => {
        if (!Number.isInteger(element)) {
            throw new Error('Array must contain only numbers');
        }

    });
    let averageNum = average(arr);
    let minNum = min(arr);
    let maxNum = max(arr);

    return {
        average: averageNum,
        min: minNum,
        max: maxNum,
        length: arr.length
    }

}


module.exports = analyseArray;