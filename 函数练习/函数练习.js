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

// 求100之间偶数的和
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum1 += i;
    }
}
console.log(sum1); //2550

// 求100之间基数的和
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum2 += i
    }
}
console.log(sum2); //2500

// 求100之间所有能被3整除的和
let sum3 = 0;
for(let i=0;i<=100;i++){
    if(i%3 === 0){
        sum3 += i;
    }
}
console.log(sum3); //1683

function Human(options){


} // 构造函数结束


// 补全代码，使得 human 对象满足以下条件：
//
// human 这个对象本身具有属性 name 和 city
// human.__proto__ 对应的对象（也就是原型）具有物种（species）、走（walk）和使用工具（useTools）这几个属性
// human.__proto__.constructor === Human 为 true
// human2 和 human 类似。

function Human (options){
    this.name = options.name;
    this.city = options.city;
}

Human.prototype.species = 'human';
Human.prototype.walk = function(){
    console.log('走两步！')
};
Human.prototype.useTools = function(){
    console.log('使用工具🔧')
};

var human = new Human({name:'Frank', city: 'Hangzhou'});
var human2 = new Human({name:'Jack', city: 'Hangzhou'});

// .push() 接受一个参数，这个参数可以是任意的数据类型，然后把这个参数添加到数组的最后一位，返回原来的数组。
// .pop() 返回值是数组的最后一个值，作用是把这个值去除。这个方法可以更改数组的长度。
// .shift() 和.unshift() 删除数组的第一个值和 把一个参数添加到数组的第一个值。
// .join() 接受一个参数，返回值是 用这个参数连接的字符串。这个参数用双引号包住。
// .splice() 接受三个参数，第一个参数表示数组的下标「start」开始位置，第二个参数是整数，表示要移除的数组元素的个数。～第三个参数表示要添加进数组的元素,从start 位置开始。
// .sort() 排序
// .reverse() 反转数组
// .concat() 连接两个数组


// 使用 JSON 对象实现一个简单的深拷贝函数(deepCopy)。
let arr = [1,2,3,4,5,6,7];
function deepCopy(any){
    let a = JSON.stringify(any);
    let b = JSON.prase(a)
    return b
}
var x = deepCopy(arr);

arr数组就深拷贝给了x变量

function filterPositive(arr){
    arr.filter((e)=>{
        return e>=0
    })
}

// 实现一个节流函数。
var timer
function hifanc(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            console.log('我是最后一个执行的函数！')
        },1000)
}

或者
function throttle(fn, delay) {
    var timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(function(){ 
            fn(arguments)
        }, delay)
    }
}