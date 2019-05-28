var multer  =   require('multer')

module.exports = (folder) => {
  var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './public/images/'+folder);
    },
    filename: function (req, file, callback) {
      callback(null, Date.now() + '-' + file.originalname);
    }
  });
  
  return multer({ storage : storage}).single('image')
}