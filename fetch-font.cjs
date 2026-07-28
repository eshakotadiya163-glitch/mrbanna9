const https = require('https');
https.get('https://www.tradersparadiselive.com/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const fonts = data.match(/family=([^&'\"]+)/g);
    console.log(fonts);
  });
});
