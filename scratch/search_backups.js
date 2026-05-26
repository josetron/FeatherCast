const fs = require('fs');
const path = require('path');

const scanHtml = (dir) => {
  fs.readdirSync(dir).forEach((f) => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      scanHtml(fp);
    } else if (f === 'index.html') {
      const content = fs.readFileSync(fp, 'utf8');
      const lines = content.split('\n');
      console.log('File:', fp);
      lines.forEach((l, i) => {
        if (l.includes('hotspots') || l.includes('hotspot')) {
          console.log('  ' + (i + 1) + ': ' + l.trim());
        }
      });
    }
  });
};

scanHtml('archive');
