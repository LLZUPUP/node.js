const readline = require('readline')


const completer = (line) => {
  const command = 'npm'
  const subCommands = ['help','init','install'];
  if(line.length<command.length) {
    return [ command.indexOf(line) === 0? [command]: [],line]
  }
  let hits = subCommands.filter(subCommand => {
    const lineTrippedCommand = line.replace(command, '').trim();
    return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
  });
  if(hits.length===1) {
    hits = hits.map(function(hit) {
      return [command, hit].join(' ');
    })
  }
  // 匹配到多个或者没有匹配到
  return [hits.length? hits:subCommands,line];
}

// npm 三个命令都出来，不熟悉，建议出来，npm i install init出来 help不要出来
// filter 的条件字符串    replace 将npm 干掉
// commands 命出filter

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
})

rl.prompt();