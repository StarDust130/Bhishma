import type {  Request, Response } from "express";

export function errorMiddleware(
  error: Error,
  _req: Request,
  res: Response,
) {
  res.status(500).json({
    message: error.message,
  });
}
