import { Request, Response, NextFunction } from 'express'

export type RequestHandler = (req: Request, res: Response, next: NextFunction) => any

export interface ResponseData {
  statusCode: number
  data: {
    firstName: string
    lastName: string
    clientId: string
  }
}