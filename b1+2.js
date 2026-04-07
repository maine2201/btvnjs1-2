// //P1.Cách 1
function kiemTraChanLe(n) {
    if (n % 2 == 0) {return "Chẵn";    
    } else {
    return "Lẻ";
}
};
console.log(kiemTraChanLe(2))
//Cách 2
const kiemTraChanLe = function(n) {
    if (n % 2 == 0) {return "Chẵn";    
    } else {
    return "Lẻ";
}
}
console.log(kiemTraChanLe(10))
//cách 3
const kiemTraChanLe = (n) => {
    if ( n % 2 == 0) {
        return "Chẵn";
    } else {
        return "Lẻ";
    }
}
console.log(kiemTraChanLe(5))

//Phần 2.Cách 1
function laSoNguyenTo(n){
if (n < 2) {
    alert ("Failse");
}
else{
for (let i = 2; i < n; i++) {
    if ( n % i == 0) {
        alert("Failse");
    } else {
        alert("True");
    }
}
}
}
console.log(laSoNguyenTo(5))
//Cách 2
const laSoNguyenTo = function (n) {
    if (n < 2) {
    alert ("Failse");
}
else{
for (let i = 2; i < n; i++) {
    if ( n % i == 0) {
        alert("Failse");
    } else {
        alert("True");
    }
}
}
}
console.log(laSoNguyenTo(2))
//Cách 3
const laSoNguyenTo = (n) => {
    if (n < 2) {
    alert ("Failse");
}
else{
for (let i = 2; i < n; i++) {
    if ( n % i == 0) {
        alert("Failse");
        break;
    } else {
        alert("True");
    }
}
}
};
console.log(laSoNguyenTo(5));

// // Vòng lặp. Phần 1
for (let i = 1; i < n; i++) {
    if (laSoNguyenTo(i)) {
        console.log(i);
}
}

//Phần 2
n = Number(prompt("Nhập số n"));
console.log(n);
let tong = 0;
for (let i = 1; i < n; i++){
    if (i % 3 == 0 || i % 5 == 0);
}
tong += i;
console.log(tong);