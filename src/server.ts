import express, { request, response } from "express"

const app = express();

app.listen(3000, () => console.log("Serve is running!!!"));

app.get("/get", (request, response) => {
    return response.send("GET");
});

app.post("/post" , (request, response) => {
    return response.send("POST");
});