import { ErrorRequestHandler } from "express";

const errorsHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  return response.status(500).json({ message: "Internal Server Error" });
};

export default errorsHandler;
