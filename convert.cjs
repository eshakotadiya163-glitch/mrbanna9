const fs = require('fs');
const html = fs.readFileSync('mrbanna.html', 'utf8');

function extract(idRegex, endRegex) {
  const match = html.match(idRegex);
  if (!match) return '';
  const start = match.index;
  const matchEnd = html.substring(start).match(endRegex);
  if (!matchEnd) return '';
  return html.substring(start, start + matchEnd.index + matchEnd[0].length);
}

const header = extract(/<header[^>]*>/, /<\/header>/);
const hero = extract(/<section id="home"[^>]*>/, /<\/section>/);
const services = extract(/<section id="services"[^>]*>/, /<\/section>/);
const platforms = extract(/<section id="platforms"[^>]*>/, /<\/section>/);
const social = extract(/<section id="social"[^>]*>/, /<\/section>/);
const cta = extract(/<section id="contact"[^>]*>/, /<\/section>/);
const footer = extract(/<footer[^>]*>/, /<\/footer>/);

function toJSX(str) {
  return str.replace(/class=\"/g, 'className=\"')
            .replace(/charSet=\"/g, 'charSet=\"')
            .replace(/for=\"/g, 'htmlFor=\"')
            .replace(/stroke-width/g, 'strokeWidth')
            .replace(/stroke-linecap/g, 'strokeLinecap')
            .replace(/stroke-linejoin/g, 'strokeLinejoin')
            .replace(/fill-rule/g, 'fillRule')
            .replace(/clip-rule/g, 'clipRule')
            .replace(/aria-hidden=\"true\"/g, 'aria-hidden={true}')
            .replace(/aria-current=\"page\"/g, 'aria-current=\"page\"')
            .replace(/<!--.*?-->/g, '')
            .replace(/style=\"(.*?)\"/g, (match, p1) => {
                // very basic style parsing
                const rules = p1.split(';').filter(Boolean);
                let objStr = rules.map(r => {
                    const [k, v] = r.split(':');
                    if (!k || !v) return '';
                    let key = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                    return `"${key}": "${v.trim()}"`;
                }).filter(Boolean).join(', ');
                return `style={{${objStr}}}`;
            })
            .replace(/<img(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', '/>'))
            .replace(/<input(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', '/>'))
            .replace(/<br(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', '/>'))
            .replace(/required=\"\"/g, 'required');
}

fs.writeFileSync('src/components/site/Header.tsx', 'import { Link } from "@tanstack/react-router";\nimport { Button } from "@/components/ui/button";\n\nexport function Header() {\n  return (\n    ' + toJSX(header) + '\n  );\n}');
fs.writeFileSync('src/components/site/Hero.tsx', 'import { Link } from "@tanstack/react-router";\nimport { Button } from "@/components/ui/button";\n\nexport function Hero() {\n  return (\n    ' + toJSX(hero) + '\n  );\n}');
fs.writeFileSync('src/components/site/Services.tsx', 'import { Link } from "@tanstack/react-router";\nimport { Button } from "@/components/ui/button";\n\nexport function Services() {\n  return (\n    ' + toJSX(services) + '\n  );\n}');
fs.writeFileSync('src/components/site/Platforms.tsx', 'import { Link } from "@tanstack/react-router";\nimport { Button } from "@/components/ui/button";\n\nexport function Platforms() {\n  return (\n    ' + toJSX(platforms) + '\n  );\n}');
fs.writeFileSync('src/components/site/Social.tsx', 'import { Link } from "@tanstack/react-router";\nimport { Button } from "@/components/ui/button";\n\nexport function Social() {\n  return (\n    ' + toJSX(social) + '\n  );\n}');
fs.writeFileSync('src/components/site/CTA.tsx', 'import { Link } from "@tanstack/react-router";\nimport { Button } from "@/components/ui/button";\n\nexport function CTA() {\n  return (\n    ' + toJSX(cta) + '\n  );\n}');
fs.writeFileSync('src/components/site/Footer.tsx', 'import { Link } from "@tanstack/react-router";\nimport { Button } from "@/components/ui/button";\n\nexport function Footer() {\n  return (\n    ' + toJSX(footer) + '\n  );\n}');

console.log('JSX written!');
