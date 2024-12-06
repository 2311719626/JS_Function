function printFunction(f) {
  // f.toString() 返回函数的源代码
  console.log(f.toString());
  console.log("-------------");
  // f.name 是函数名
  console.log(`The name of the function is ${f.name}.`);
  return;
}

function calSum(n) {
  return (n * (n + 1)) / 2;
}

printFunction(calSum);
