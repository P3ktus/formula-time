import express from "express";

const jsonMiddleware = express.json();

export default (req, res, next) => {
  if (!PATH_BLACK_LIST[req.path]) {
    jsonMiddleware(req, res, next);
  } else next();
};

const PATH_BLACK_LIST = {
  "/webhook": true,
};
