//求余数
function isPrimeNumber(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

// isPrimeNumber(8)?'是质数':'不是质数'

//求两个数的最大值
function getMax(x, y) {
    return x > y ? x : y;
}

//求三个数的最大值
function getThreeMax(x, y, z) {
    return x > y ? (x > z ? x : z) : (y > z ? y : z)
}

//求n个数的最大值   ??????

var n = [1, 2, 3, 4, 5, 6, 7, 8];

function getNMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max
}

//思路就是把数组中的第一个看成最大的，然后和每一个比较，如果有比他大的就赋值给他
//求最小值也是这个思路：

function getNmin(arr) {
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min
}

//给一组数字，求和 最大值和最小值;
function getSumMaxMin(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    var xxx = [sum, max, min];
    return xxx
}
//
// 测试
// console.log(getSumMaxMin(n));

