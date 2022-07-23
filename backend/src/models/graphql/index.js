import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Producto {
        id: ID
        title: String
        description: String
        slug: String
        images: String
        price: Int
        inStock: Int
        created_at: String
        updated_at: String
    }
    type Usuario {
        name: String
        lastName: String
        email: String
        password: String
        role: String
    }
    input ProductoInput {
        title: String!
        description: String
        image: String
        price: Int!
        inStock: Int!
        slug: String!
    }
    input UsuarioInput {
        name: String!
        lastName: String!
        email: String
        password: String!
    }
    input ProductoUpdateInput {
        title: String!
        description: String
        image: String
        price: Int!
        inStock: Int!
        slug: String!
    }
    input UsuarioUpdateInput {
        name: String!
        lastName: String!
        email: String
        password: String!
    }
    type Query {
        productos: [Producto]
        producto(slug: String!): Producto
        usuarioGet(email: String!): Usuario
    }
    type Mutation {
        createProducto(producto: ProductoInput): Producto
        updateProducto(slug: String!, producto: ProductoUpdateInput): Producto
        deleteProducto(slug: String!): String
        createUsuario(usuario: UsuarioInput): Usuario
        updateUsuario(email: String!, usuario: UsuarioUpdateInput): Usuario
        deleteUsuario(email: String!): String
    }
`)

export default schema
