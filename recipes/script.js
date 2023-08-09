function powerOfTwo(n) {
    if (n < 1) {
        return false 
    }

    while (n > 1) {
        if (n % 2 !== 0){
            return false
        }

        n  = n / 2;
    }
    return true
};

console.log(powerOfTwo(3));
console.log(powerOfTwo(5));
console.log(powerOfTwo(8));

/------------------------------/ 
console.log('-----------------');
/------------------------------/ 

function isPrime(n) {
    if (n < 2) {
        return false
    };

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i === 0) {
            return false
        }
    }
    
    return true
};

console.log(isPrime(6));
console.log(isPrime(12));
console.log(isPrime(5));

/------------------------------/ 
console.log('-----------------');
/------------------------------/ 


function linearSearch(t, arr) {
    
    return arr.indexOf(t);
}

console.log(linearSearch(0, [10, 5, 0, 6, 9, 8]));

/------------------------------/ 
console.log('-----------------');
/------------------------------/ 


function recursiveBinarySearch(array, target) {
    return search(array, target, 0, array.length - 1);

};

function search(arr, tar, l, r) {
    if (l > r) {
        return -1;
    }

    let middle = Math.floor((l + r) / 2);

    if (tar === arr[middle]) {
        return middle;
    }

    if (tar < arr[middle]) {
        return search(arr, tar, l, middle - 1);
    } else {
        return search(arr, tar, middle + 1, r);
    }
}

console.log(recursiveBinarySearch([0, 3, 5, 6, 10, 15], 3));

/------------------------------/ 
console.log('-----------------');
/------------------------------/ 



function insertionSort(arr) {

    for( let i = 1; i < arr.length; i++) {
        let nti = arr[i];
        let se = i -1;
        while (se >= 0 && arr[se] > nti) {
            
            arr[se + 1] = arr[se];
            se -= 1;
        }
        arr[se + 1] = nti;

    };
    return arr;
}


console.log(insertionSort([0, -1, 5, 6, 2, -3]));

/------------------------------/ 
console.log('-----------------');
/------------------------------/ 

function quickSort(arr) {

    if (arr.length < 2) {
        return arr
    };

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        };
    };

    return [...quickSort(left), pivot, ...quickSort(right)]
}


const arr = [-5, 0, 4, -3, 10, 5, 11, -1];
console.log(quickSort(arr));


/------------------------------/ 
console.log('-----------------');
/------------------------------/ 

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    };

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
    
};

function merge(leftArr, rightArr) {
    const sortedArr = []
    while(leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    };

    const finalArr = [...sortedArr, ...leftArr, ...rightArr]
    return finalArr
}

console.log(mergeSort([-2, 1, 0, -5, 84, 3]));

/------------------------------/ 
console.log('-----------------');
/------------------------------/ 

function towerofHanoi(n, fromRod, toRod, usingRod) {
    if (n===1) {
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
      return 
    }
  
    towerofHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerofHanoi(n-1, usingRod, toRod, fromRod)
    
  }
  
  towerofHanoi(4, 'A', 'C', 'B');