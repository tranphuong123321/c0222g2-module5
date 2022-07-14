var n1 = 0;
var n2 = 1;
var n3;
var list = [];
var sum = 0;
function createFibo(num, count) {
    if (count < num) {
        if (count <= 1) {
            n3 = count;
        }
        else {
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
        count++;
        list.push(n3);
        createFibo(num, count);
    }
    else {
        return list;
    }
}
function sumFibo() {
    createFibo(6, 0);
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var number = list_1[_i];
        sum += number;
    }
    console.log(list);
    console.log(sum);
}
sumFibo();
