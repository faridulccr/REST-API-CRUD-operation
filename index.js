//Dependecies
const app = require("./app");
const config = require("./config/config");

// config:
const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
