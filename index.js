#!/usr/bin/env node

const toCsv = require('json2csv').parse
const fs = require('fs')
const extractFeatures = require('./lib/extractFeatures')

const ordersPath = process.argv[2]
const orders = JSON.parse(fs.readFileSync(ordersPath))
const output = toCsv(extractFeatures(orders))
console.log(output)
