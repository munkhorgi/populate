import express from "express";
import {
  getAlllinks,
  createlink,
  deleteLink,
  findlink,
} from "../controller/Link.js";
import { adminCheck } from "../middleware/role.js";
const router = express.Router();

router.route("/").get(getAlllinks).post(createlink);
router.route("/:id").delete(deleteLink,adminCheck);
router.route("/:params").get(findlink);

export default router;
