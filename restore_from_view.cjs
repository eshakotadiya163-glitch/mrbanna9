const fs = require('fs');
const lines = fs.readFileSync('C:/Users/eshak/.gemini/antigravity/brain/4f37b0de-f9d5-4d72-8cdc-101bc9801c66/.system_generated/logs/transcript_full.jsonl', 'utf-8').split('\n');

const restored = new Set();

for (const line of lines) {
  if (!line) continue;
  try {
    const entry = JSON.parse(line);
    if (entry.type === 'VIEW_FILE' || (entry.type === 'PLANNER_RESPONSE' && entry.content && entry.content.includes('Showing lines'))) {
       // but actually VIEW_FILE response is from the SYSTEM.
       // Let's just regex the entire line for the specific format.
    }
    
    // We can just extract the content string if it contains "File Path: `file:///E:/mrbanna-main/src/..."
    if (entry.content && entry.content.includes('File Path: `file:///E:/mrbanna-main/src/')) {
       const match = entry.content.match(/File Path: `file:\/\/\/(E:\/mrbanna-main\/src\/.*?)`/);
       if (match) {
          const filePath = match[1];
          if (!restored.has(filePath)) {
             // extract lines: "1: import ..."
             // The format is: "\n<line_number>: <original_line>\n"
             const codeLines = [];
             const splitContent = entry.content.split('\n');
             let isCode = false;
             for (const l of splitContent) {
                if (l.match(/^\d+:/)) {
                   isCode = true;
                   codeLines.push(l.replace(/^\d+:\s?/, ''));
                } else if (isCode) {
                   if (l.startsWith('The above content shows') || l.startsWith('Content truncated:')) {
                      break;
                   }
                }
             }
             if (codeLines.length > 0) {
                fs.writeFileSync(filePath, codeLines.join('\n'));
                console.log('Restored exactly from view: ' + filePath);
                restored.add(filePath);
             }
          }
       }
    }
  } catch(e) {}
}

console.log('Done restoring from VIEW_FILE logs');
