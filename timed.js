// 定义高阶函数 timed
// 包装函数 f，在调用 f 之前和之后记录时间
function timed(f) {
  // 把实参收集到一个剩余形参数组 args 中
  return function (...args) {
    // 输出提示信息
    console.log(`The name of the [Function] is '${f.name}'`);
    console.log("----------------");
    // 记录调用 f 之前的时间
    let startTime = Date.now();
    // 输出记录现在的时间
    console.log(`[Function] '${f.name}' started at ${startTime} ms`);
    console.log("----------------");
    try {
      // 依次打印 f 的每一个参数
      console.log(
        `The argments of the [Function] '${f.name}' are [${args.join(" & ")}]`
      );
      console.log("----------------");
      // 调用 f 并返回结果
      let answer = f(...args);
      console.log(`The result of the [Function] '${f.name}' is ${answer}.`);
      console.log("----------------");

      return answer;
    } finally {
      // 记录调用 f 之后的时间
      console.log(`[Function] '${f.name}' exited at ${startTime} ms`);
      console.log("================");
      console.log(`Exiting ${f.name} after ${Date.now() - startTime} ms`);
    }
  };
}

// 这里的 m 是多余的，为了测试 args 是否能够正确传递
function benchmark(n, m) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  // 函数调用标记
  // 暂停
  setTimeout(() => {
    console.log("***");
    return sum;
  }, 100000);
}

let a = timed(benchmark)(10000, 3);
