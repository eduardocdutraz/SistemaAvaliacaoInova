"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AlunoRoutes_1 = require("./routes/AlunoRoutes");
var AvaliadorRoutes_1 = require("./routes/AvaliadorRoutes");
var GroupRoutes_1 = require("./routes/GroupRoutes");
var app = (0, express_1.default)();
var port = 5401;
app.use(express_1.default.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(AlunoRoutes_1.default);
app.use(AvaliadorRoutes_1.default);
app.use(GroupRoutes_1.default);
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
