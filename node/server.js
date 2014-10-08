var application_root = __dirname;
var express = require('express');
var path = require('path');
var mongoose = require('mongoose')

var app = express();

app.use(express.bodyParser());
app.use(express.static(path.join(application_root, '../')));
app.get('/', function(req, res){
  res.send('Hello World!');
});

// mongodb 関連

// スキーマの定義
var CarSchema = new mongoose.Schema({
	kind : String,
	capacity : Number
});

// モデル化。model('[登録名]', '定義したスキーマクラス')
// 登録名 + s が,コレクション名になる (Schema の第二引数で変更可)
// http://mongoosejs.com/docs/guide.html#collection
mongoose.model('car',CarSchema);

//定義したときの登録名で呼び出し
var Car = mongoose.model('car');

// car_database がデータベース名
mongoose.connect('mongodb://localhost/car_database');

app.get('/show',function(req,res){
	return Car.find(function(err,cars){
		if(!err){
			return res.send(cars);
		}else{
			return console.log(err);
		}
	});
});

app.post('/add',function(req,res){
	var car = new Car({
		kind : req.body.kind,
		capacity : req.body.capacity
	});
	car.save(function(err){
		if(!err){
			return console.log('add!');
		}else{
			return console.log(err);
		}
	});
	return res.send(car);
});

// サービス開始
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
