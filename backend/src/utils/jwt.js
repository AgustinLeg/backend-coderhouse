import jwt from 'jsonwebtoken'

export const signToken = (_id, email) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error('jwt secret key need')
  }

  return jwt.sign({ _id, email }, process.env.JWT_SECRET_SEED, {
    expiresIn: '30d',
  })
}

export const isValidToken = (token) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error('jwt secret key need')
  }
  try {
    return jwt.verify(
      token,
      process.env.JWT_SECRET_SEED || '',
      (err, payload) => {
        if (err) return false
        return payload
      }
    )
  } catch (error) {
    return false
  }
}
