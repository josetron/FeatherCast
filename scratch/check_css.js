const fs = require('fs');

const css = fs.readFileSync('styles.css', 'utf8');

const checkBraces = (css) => {
  let count = 0;
  let inComment = false;
  let inString = false;
  let stringChar = '';

  for (let idx = 0; idx < css.length; idx++) {
    const char = css[idx];
    const nextChar = css[idx + 1] || '';
    const prevChar = css[idx - 1] || '';

    // Comment handling
    if (!inString && !inComment && char === '/' && nextChar === '*') {
      inComment = true;
      idx++;
      continue;
    }
    if (inComment && char === '*' && nextChar === '/') {
      inComment = false;
      idx++;
      continue;
    }
    if (inComment) continue;

    // String handling
    if (!inString && (char === '"' || char === "'")) {
      inString = true;
      stringChar = char;
      continue;
    }
    if (inString && char === stringChar && prevChar !== '\\') {
      inString = false;
      continue;
    }
    if (inString) continue;

    if (char === '{') {
      count++;
    } else if (char === '}') {
      count--;
      if (count < 0) {
        console.log(`Unmatched closing brace '}' at character index ${idx}`);
        return;
      }
    }
  }

  if (count > 0) {
    console.log(`Unclosed open braces '{' (count: ${count})`);
  } else {
    console.log('CSS braces are balanced!');
  }
};

checkBraces(css);
