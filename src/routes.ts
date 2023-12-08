import express from "express";
import { linkController } from "./controllers/linkController";

const router = express.Router();

router.post("/new", linkController.createLink);
router.post("/:code", linkController.codeCreate);

export {
    router
}