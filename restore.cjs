const fs = require('fs');
const log = fs.readFileSync('C:/Users/eshak/.gemini/antigravity/brain/4f37b0de-f9d5-4d72-8cdc-101bc9801c66/.system_generated/logs/transcript_full.jsonl', 'utf-8').split('\n');

const originalContents = {};

for (const line of log) {
  if (!line) continue;
  try {
    const entry = JSON.parse(line);
    // Recursively search for tool_calls in the entry
    const findToolCalls = (obj) => {
      if (!obj) return;
      if (Array.isArray(obj)) {
        obj.forEach(findToolCalls);
      } else if (typeof obj === 'object') {
        if (obj.tool_calls) {
          obj.tool_calls.forEach(tc => {
            if (tc.name && tc.name.includes('replace_file_content')) {
              let args = tc.arguments;
              if (typeof args === 'string') {
                try { args = JSON.parse(args); } catch(e){}
              }
              if (args && args.TargetFile && args.TargetContent) {
                if (!originalContents[args.TargetFile]) {
                  originalContents[args.TargetFile] = args.TargetContent;
                }
              }
            }
          });
        }
        Object.values(obj).forEach(findToolCalls);
      }
    };
    findToolCalls(entry);
  } catch(e) {}
}

for (const [file, content] of Object.entries(originalContents)) {
  try {
    fs.writeFileSync(file, content);
    console.log('Restored: ' + file);
  } catch(e) {
    console.log('Failed to restore ' + file + ': ' + e.message);
  }
}
