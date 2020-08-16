"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/server.ts
var app_1 = __importDefault(require("./app"));
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

const PORT = process.env.PORT || 5000;

app_1.default.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app_1.default.listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map