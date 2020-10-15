import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

interface ValidationErrors {
  [key: string]: string[];
}

const errorsHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach((e) => {
      errors[e.path] = e.errors;
    });

    return response.status(400).json({ message: "Validatoin fails", errors });
  }

  return response.status(500).json({ message: "Internal Server Error" });
};

export default errorsHandler;
