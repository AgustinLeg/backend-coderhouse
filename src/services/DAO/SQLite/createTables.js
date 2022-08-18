import { config } from './configSqLite.js'
import knex1 from 'knex'
import logger from '../../../services/logger.services.js'

const knex = knex1(config)

;(async () => {
  await knex.schema.dropTableIfExists('orders')
  await knex.schema.createTable('orders', (table) => {
    table.increments()
    table.string('user')
    table.boolean('isPaid')
    table.double('total')
  })

  await knex.schema.dropTableIfExists('order_items')
  await knex.schema.createTable('order_items', (table) => {
    table.increments()
    table.string('idOrder')
    table.string('idProduct')
    table.string('title')
    table.string('description')
    table.string('slug')
    table.string('images')
    table.string('tags')
    table.double('quantity')
    table.double('price')
    table.double('inStock')
    table.datetime('created_at')
    table.datetime('updated_at')
  })
  await knex.schema.dropTableIfExists('shipping_address')
  await knex.schema.createTable('shipping_address', (table) => {
    table.increments()
    table.string('idOrder')
    table.string('name')
    table.string('lastName')
    table.string('email')
    table.string('address')
    table.string('phone')
  })

  await knex.schema.dropTableIfExists('products')
  await knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('title')
    table.string('slug')
    table.string('tags')
    table.string('images')
    table.string('description')
    table.double('price')
    table.double('inStock')
    table.datetime('created_at')
    table.datetime('updated_at')
  })

  await knex.schema.dropTableIfExists('users')
  await knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name')
    table.string('lastName')
    table.string('email')
    table.string('password')
    table.string('role')
    table.string('created_at')
    table.string('updated_at')
  })

  await knex.schema.dropTableIfExists('messages')
  await knex.schema.createTable('messages', (table) => {
    table.increments()
    table.string('email')
    table.string('uid')
    table.string('message')
    table.datetime('createdAt')
  })

  logger.info('TABLAS CREADAS CON ÉXITO.')
})()
