import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __direname = dirname(__filename);

const router = Router()

router.route("/").get((req, res) => {
    console.log(__direname)
    res.sendFile(path.join(__direname, "../html/form.html"))
})

export default router;