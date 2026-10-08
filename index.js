import express from "express";
import routers  from "express";

const app = express();
app.use(express.json());

app.use(routers);

app.listen(3000, () => {
    console.log("Hospedado na porta 3000!")
})