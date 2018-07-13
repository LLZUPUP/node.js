const readline = require('readline');

// process 进程     stdin 输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

})

rl.question('邓志远是赵乐乐失散多年的儿子么?', function(answer) {
  console.log('Your has entered [%s]', answer);
  rl.close();
});