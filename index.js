import express from "express";
import cors from "cors"
import {
    gethealth,
    getStudents,
    postStudents,
    deleteStudents,
    putStudents,
    patchStudents,
    getStudentsById,

} from "./controllers/students.js";

const app = express();
const PORT = 502;

app.use(cors());
app.use(express());

app.use(express.json()); // json data to read middel ware
app.get("/health", gethealth);
app.get("/students", getStudents); // For read the data
app.get("/students/:id", getStudentsById);
app.post("/students", postStudents);
app.delete("/students/:id", deleteStudents);
app.put("/students/:id", putStudents);
app.patch("/students/city/:id", patchStudents);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

