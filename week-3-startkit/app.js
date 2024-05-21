const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");
const cors = require("./middlewares/cors");

const app = express();
const PORT = 3000;

app.use(cors);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(mainRoute);
app.use(gamesRouter); 

app.listen(PORT, () => {
    console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});