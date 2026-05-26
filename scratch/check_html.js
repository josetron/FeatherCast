const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// A simple stack-based tag balance checker
const checkTags = (html) => {
  const stack = [];
  const regex = /<\/?([a-zA-Z0-9:-]+)(?:\s+[^>]*)?>/g;
  let match;
  const ignoredTags = new Set(['meta', 'link', 'img', 'br', 'hr', 'input', 'rect', 'circle', 'path', 'line', 'svg', 'iframe']);

  while ((match = regex.exec(html)) !== null) {
    const fullTag = match[0];
    const tagName = match[1].toLowerCase();
    const isClosing = fullTag.startsWith('</');

    if (ignoredTags.has(tagName)) {
      continue;
    }

    if (isClosing) {
      if (stack.length === 0) {
        console.log(`Unmatched closing tag: ${fullTag} at index ${match.index}`);
        return;
      }
      const last = stack.pop();
      if (last.name !== tagName) {
        console.log(`Mismatch: opened <${last.name}> (index ${last.index}) but closed with </${tagName}> (index ${match.index})`);
        return;
      }
    } else {
      stack.push({ name: tagName, index: match.index });
    }
  }

  if (stack.length > 0) {
    console.log('Unclosed tags remaining:');
    stack.forEach((t) => console.log(`  <${t.name}> at index ${t.index}`));
  } else {
    console.log('HTML tags are balanced!');
  }
};

checkTags(html);
