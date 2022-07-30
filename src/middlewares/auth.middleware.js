export const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization
  if (!bearerHeader) {
    return res
      .status(401)
      .json({ message: 'No tienes permisos para hacer esto' })
  }

  const [, bearerToken] = bearerHeader.split(' ')
  req.token = bearerToken
  return next()
}
