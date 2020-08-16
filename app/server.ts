// app/server.ts
import app from "./app";
var swaggerUi = require('swagger-ui-express'); 
var swaggerDocument = require('./swagger.json');

const PORT = process.env.PORT || 5000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})

