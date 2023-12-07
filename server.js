const jsonServer = require("json-server");  //import json-server library
const server=jsonServer.create();
const router=jsonServer.router("student_db.json");
const middlewares= jsonServer.defaults();
const port = process.env.PORT || 3001;
server.use(middlewares);
server.use(router);
server.listen(port);

