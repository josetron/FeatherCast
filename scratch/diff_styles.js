const fs = require('fs');

const f1 = fs.readFileSync('archive/versions/2026-05-26_06-38-16/styles.css', 'utf8').split('\n');
const f2 = fs.readFileSync('styles.css', 'utf8').split('\n');

const diffLines = [];
let i = 0, j = 0;
while (i < f1.length || j < f2.length) {
  if (i < f1.length && j < f2.length && f1[i].trim() === f2[j].trim()) {
    i++;
    j++;
  } else {
    console.log(`Diff at old line ${i+1}, new line ${j+1}:`);
    console.log(`- ${f1[i] || '<EOF>'}`);
    console.log(`+ ${f2[j] || '<EOF>'}`);
    i++;
    j++;
    if (diffLines.push(1) > 20) {
      console.log('... truncated ...');
      break;
    }
  }
}
