import Link from "../model/link.js";
import { nanoid } from "nanoid";

export const getAlllinks = async (req, res) => {
  try {
    const link = await Link.find({});
    res.status(200).send({
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createlink = async (req, res) => {
  try {
    const shortlink = nanoid(4); //=> "V1StGXR8_Z5jdHi6B-myT"
    const link = await Link.create({ ...req.body, Shortlink: shortlink });
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deletelink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const findlink = async (req, res) => {
  try {
    const { params } = req.params;
    const link = await Link.findOne({
      Shortlink: params,
    });
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
