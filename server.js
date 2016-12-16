var express = require('express');
var multer = require('multer');
var server = express();
var upload = multer();
server.listen(process.env.PORT, process.env.IP);
server.use(express.static('view'));

server.post('/get-file-size', upload.single('image'), function(req, res) {
  res.send('{"size": ' + req.file.size + '}');
});
