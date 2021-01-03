let add = document.getElementById("add");
let sub = document.getElementById("substract");
let num = document.getElementById("number");

let integer = 0;

add.addEventListener('click', function () {
    integer += 1;
    num.innerHTML = integer;
});

sub.addEventListener('click', function () {
    integer -= 1;
    num.innerHTML = integer;
})