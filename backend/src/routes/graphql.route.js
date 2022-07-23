import { graphqlHTTP } from 'express-graphql'
import express from 'express'
import schema from '../models/graphql/index.js'
import {
  producto,
  productos,
  usuarioGet,
  createProducto,
  updateProducto,
  deleteProducto,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from '../services/graphql.services.js'
export const GraphqlRouter = express.Router()

GraphqlRouter.use(
  '/',
  graphqlHTTP({
    schema,
    rootValue: {
      producto,
      productos,
      usuarioGet,
      createProducto,
      updateProducto,
      deleteProducto,
      createUsuario,
      updateUsuario,
      deleteUsuario,
    },
    graphiql: true,
  })
)
