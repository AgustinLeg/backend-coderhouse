export const adminRole = (req, res, next) => {
  const { role } = req.body
  if (role !== 'ADMIN') {
    return res
      .status(401)
      .json({ message: 'No tienes permisos para hacer esto' })
  }

  return next()
}

export const resellerRole = (req, res, next) => {
  const { role } = req.body
  if (role !== 'RESELLER') {
    return res
      .status(401)
      .json({ message: 'No tienes permisos para hacer esto' })
  }

  return next()
}
