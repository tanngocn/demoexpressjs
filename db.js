var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync') 
var adapter = new FileSync('db.json')
var db = low(adapter);

db.defaults({users:[] }) //Tạo mới đối tượng trong db.json là users
  .write()

module.exports=db;