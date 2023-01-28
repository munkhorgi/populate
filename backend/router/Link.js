import express from "express";
import {
  getAlllinks,
  createlink,
  adminDelete,
  findlink,
} from "../controller/link.js";

const router = express.Router();

router.route("/").get(getAlllinks).post(createlink);
router.route("/:id").delete(adminDelete);
router.route("/:params").get(findlink);

export default router;
