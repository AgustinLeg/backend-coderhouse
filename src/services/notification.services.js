import { sendGmail } from './email.services.js'
import { sms, wp } from './twilio.services.js'

const MAIL_ADMIN = process.env.MAIL_ADMIN

const mailNuevoUsuario = async ({ name, lastName, email, role }) => {
  const html = `
    <h1>Se a Registrado un Nuevo Usuario en la WEB</h1>
    <br>
    <ul>
        <li>Nombre: ${name}</li>
        <li>Apellido: ${lastName}</li>
        <li>E-Mail: ${email}</li>
        <li>Rol: ${role}</li>
        <li>Fecha Alta: ${new Date().toLocaleDateString()}</li>
    </ul>
    `
  await sendGmail(
    MAIL_ADMIN,
    'Nuevo Registro de Usuario',
    '',
    '',
    'EC-CoderHouse',
    html
  )
}

const mailNuevaVenta = async ({
  _id,
  total,
  numberOfItems,
  shippingAddress,
  orderItems,
}) => {
  const html = `
        <h1>Se a Registrado una Nueva Venta en la WEB</h1>
        <br>
        <h5>Datos del Cliente</h5>
        <ul>
            <li>ID Órden: ${_id}</li>
            <li>Importe Total: ${total}</li>
            <li>Cantidad: ${numberOfItems}</li>
            <li>Nombre: ${shippingAddress.name}</li>
            <li>Apellido: ${shippingAddress.lastName}</li>
            <li>Email: ${shippingAddress.email}</li>
            <li>Domicilio: ${shippingAddress.address}</li>
            <li>Télefono: ${shippingAddress.phone}</li>
        </ul>
        <br>
        <h5>Datos de la Venta</h5>
        <table>
            <thead>
                <tr>
                    <th colspan="3">Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${orderItems.map((product) => {
                  return `
                        <tr>
                            <td><img src="${product.images[0]}" width="50" height="50"></td>
                            <td>${product.slug}</td>
                            <td>${product.title}</td>
                            <td>${product.quantity}</td>
                            <td>${product.price}</td>
                        </tr>
                    `
                })}
            </tbody>
        </table>
    `
  await sendGmail(
    MAIL_ADMIN,
    `Nuevo Pedido de ${shippingAddress.name} ${shippingAddress.lastName} Mail: ${shippingAddress.email}`,
    ``,
    ``,
    `CoderShop`,
    html
  )
}

const wpNuevaVenta = async ({ shippingAddress }) => {
  await wp(
    `Nuevo Pedido de ${shippingAddress.name} ${shippingAddress.lastName} Mail: ${shippingAddress.email}`,
    `549${shippingAddress.phone}`
  )
}

const smsNuevaVenta = async ({
  _id,
  total,
  numberOfItems,
  shippingAddress,
  orderItems,
}) => {
  const fecha = new Date().toLocaleString()
  const body = `
        CoderShop te Informe que tu Pedido con ID ${_id} el dia ${fecha}
        A nombre de ${shippingAddress.name} ${shippingAddress.lastName}  - EMail: ${shippingAddress.email}
        por un total de ${total}, por ${orderItems} productos,
        Se encuentra Registrado y en Proceso de Preparación.
        En breve le Comunicaremos cuando el mismo se encuentre listo.
        Gracias por su Compra.
    `
  await sms(body, `54${shippingAddress.phone}`)
}

export { mailNuevaVenta, mailNuevoUsuario, smsNuevaVenta, wpNuevaVenta }
