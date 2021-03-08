/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isdProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isdProd
  }
})
