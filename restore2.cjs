const fs = require('fs');
const lines = fs.readFileSync('C:/Users/eshak/.gemini/antigravity/brain/4f37b0de-f9d5-4d72-8cdc-101bc9801c66/.system_generated/logs/transcript_full.jsonl', 'utf-8').split('\n');

const targets = [
  'E:\\\\mrbanna-main\\\\src\\\\styles.css',
  'E:\\\\mrbanna-main\\\\src\\\\routes\\\\index.tsx',
  'E:\\\\mrbanna-main\\\\src\\\\components\\\\site\\\\Header.tsx',
  'E:\\\\mrbanna-main\\\\src\\\\components\\\\site\\\\Hero.tsx',
  'E:\\\\mrbanna-main\\\\src\\\\components\\\\site\\\\Services.tsx',
  'E:\\\\mrbanna-main\\\\src\\\\components\\\\site\\\\Platforms.tsx',
  'E:\\\\mrbanna-main\\\\src\\\\components\\\\site\\\\Social.tsx',
  'E:\\\\mrbanna-main\\\\src\\\\components\\\\site\\\\CTA.tsx',
  'E:\\\\mrbanna-main\\\\src\\\\components\\\\site\\\\Footer.tsx'
];

let restoredCount = 0;
const seen = new Set();

for (const line of lines) {
  if (!line) continue;
  if (!line.includes('replace_file_content')) continue;
  
  try {
    const entry = JSON.parse(line);
    if (!entry.tool_calls) continue;
    
    for (const tc of entry.tool_calls) {
      if (tc.name === 'default_api:replace_file_content') {
         let args = tc.arguments;
         if (typeof args === 'string') {
            try { args = JSON.parse(args); } catch(e){}
         }
         
         const file = args.TargetFile;
         const content = args.TargetContent;
         
         if (file && content && !seen.has(file)) {
            // Check if it's one of our targets
            const normalizedFile = file.replace(/\\/g, '/').toLowerCase();
            const isTarget = targets.some(t => normalizedFile.endsWith(t.replace(/\\\\/g, '/').split('/').pop().toLowerCase()));
            
            if (isTarget) {
               fs.writeFileSync(file, content);
               console.log('Restored: ' + file);
               seen.add(file);
               restoredCount++;
            }
         }
      }
    }
  } catch(e) {}
}

console.log('Total restored: ' + restoredCount);
