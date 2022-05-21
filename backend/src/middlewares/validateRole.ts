import { Response, Request, NextFunction } from 'express'

export const adminRole = (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.body
  if (role !== 'ADMIN') {
    return res
      .status(401)
      .json({ message: 'No tienes permisos para hacer esto' })
  }

  return next()
}

export const resellerRole = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { role } = req.body
  if (role !== 'RESELLER') {
    return res
      .status(401)
      .json({ message: 'No tienes permisos para hacer esto' })
  }

  return next()
}
