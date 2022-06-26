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
  return new Promise()((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
        if (err) return reject('JWT no válido')

        resolve(payload)
      })
    } catch (error) {
      reject('JWT no válido')
    }
  })
}
