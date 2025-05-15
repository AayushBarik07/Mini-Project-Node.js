const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
//Disk storage
const storage = multer.diskStorage({
  destination: function (req, res, file, cb) {
    cb(null, path.join(__dirname, 'public', 'files', 'uploads'));
  },
  filename: function(req, file, cb) {
    crypto.randomBytes(16, (err, name) => {
      const fn = name.toString(('hex') + path.extname(file.originalname));
      cb(null, fn);
    });
  } 
});

const upload = multer({ storage: storage });

module.exports = upload;