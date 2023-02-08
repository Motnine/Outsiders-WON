// const http = require("http");
// http
//   .createServer(function (request, response) {
//     response.end("Hello NodeJS");
//   })
//   .listen(3000, "127.0.0.1", function () {
//     console.log("Сервер начал ворк");
//   });
// const os = require("os");
// const greeting = require("./greeting");

// let userName = os.userInfo().username;

// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));
// const User = require("./user.js");

// let eugene = new User("Eugene", 32);
// eugene.sayHi();
// var greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`); //Hello Alice

// var greeting2 = require("./greeting.js");
// greeting2.name = "Bob";

// console.log(`Hello ${greeting2.name}`); //Hello Bob
// // greeting1.name тоже изменилось
// console.log(`Hello ${greeting1.name}`); //Hello Bob
// const welcome = require("./wellcome");

// welcome.getMorningMessage();
// welcome.getEveningMessage();
// const greeting = require("./greeting");

// global.name = "Eugene";

// global.console.log(date);
// console.log(greeting.getMessage());
// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];

// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log();
// console.log("name: " + name);
// console.log("age: " + age);
// const http = require("http");

// let message = "Wats Up!";
// http.createServer(function(request,response){

//     console.log(message);
//     response.end(message);

// }).listen(3000, "127.0.0.1",()=>{
//     console.log("Сервер начал прослушивание запросов");
// });
// function display(data, callback){

//     var randInt = Math.random() * (10 - 1) + 1;
//     var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;

//     setTimeout(function(){
//         callback(err, data);
//     }, 0);
// }

// console.log("Начало работы программы");

// display("Обработка данных...", function (err, data){

//     if(err) throw err;
//     console.log(data);
// });

// console.log("Завершение работы программы");
// function displaySync(callback){
//     callback();
// }

// console.log("Начало работы программы");

// setTimeout(function(){

//         console.log("timeout 500");
// }, 500);

// setTimeout(function(){

//         console.log("timeout 100");
// }, 100);

// displaySync(function(){console.log("without timeout")});
// console.log("Завершение работы программы");
// const fs = require("fs");

// // асинхронное чтение
// fs.readFile("si.txt", "utf8", function (error, data) {
//   console.log("Асинхронное чтение файла");
//   if (error) throw error; // если возникла ошибка
//   console.log(data); // выводим считанные данные
// });

// // синхронное чтение
// console.log("Синхронное чтение файла");
// let fileContent = fs.readFileSync("si.txt", "utf8");
// console.log(fileContent);
// const fs = require("fs");

// fs.writeFile("si.txt", "Hello мир!", function (error) {
//   if (error) throw error; // если возникла ошибка
//   console.log("Асинхронная запись файла завершена. Содержимое файла:");
//   let data = fs.readFileSync("si.txt", "utf8");
//   console.log(data); // выводим считанные данные
// });
// const fs = require("fs");

// fs.appendFileSync("si.txt", "Привет ми ми ми!");

// fs.appendFile("si.txt", "Привет МИД!", function(error){
//     if(error) throw error; // если возникла ошибка

//     console.log("Запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("si.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });
// fs.unlink("si.txt", (err) => {
//   if (err) console.log(err); // если возникла ошибка
//   else console.log("si.txt was deleted");
// });
// const EventEmitter = require("events");
  
// let eventName = "greet";
 
// class User extends EventEmitter {
//     sayHi(data) {
//         this.emit(eventName, data);
//     }
// }
 
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data);
// });
  
// user.sayHi("Мне нужна твоя одежда...");
// const fs = require("fs");
 
// let readableStream = fs.createReadStream("hello.txt", "utf8");
 
// let writeableStream = fs.createWriteStream("some.txt");
 
// readableStream.on("data", function(chunk){
//     writeableStream.write(chunk);
// });
// const fs = require("fs");
// const zlib = require("zlib");
  
// let readableStream = fs.createReadStream("hello.txt", "utf8");
  
// let writeableStream = fs.createWriteStream("hello.txt.gz");
  
// let gzip = zlib.createGzip();
  
// readableStream.pipe(gzip).pipe(writeableStream);
var http = require("http");
 
http.createServer(function(request, response){
     
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
     
    response.end();
}).listen(3000);