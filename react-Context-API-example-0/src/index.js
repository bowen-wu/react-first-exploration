function f1(n) {
  console.log(1, n);
  f2(n);
}

function f2(n) {
  console.log(2, n);
  f3(n);
}
function f3(n) {
  console.log(3, n);
  f4(n);
}
function f4(n) { 
  console.log(4, n);
}

{
  let n = 100;
  f1(n);
  console.log('done');
}
