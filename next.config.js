const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

console.log(`process.env.NODE_ENV> `, process.env.NODE_ENV)

module.exports = withPWA({
    basePath: '/test-next-pwa',
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        runtimeCaching,
        register: true,
        
    }
})