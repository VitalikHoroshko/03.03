const fs = require('fs');
const https = require('https');
//PDF Viewer потрібно
const fileUrl = 'file:///C:/Users/vituh/Downloads/Mystectvo10klas.pdf'
const fileName = 'Mystectvo10klas'

https.get(fileUrl, (res) => {
  const file = fs.createWriteStream(fileName);
  res.pipe(file);

  file.on('finish', () => {
    console.log('Download complete.');
    file.close();
  });
})