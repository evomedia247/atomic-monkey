import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async t => {
    const rootDir = resolve(__dirname, '..')
    let config = {}
    try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
    config.rootDir = rootDir // project folder
    config.dev = false // production build
    config.mode = 'universal' // Isomorphic application
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    nuxt.listen(4000, 'localhost')
})

// Example of testing via DOM checking
test('Route / exists and renders the navbar', async t => {
    const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
    const element = window.document.querySelector('.navbar')
    t.not(element, null)
    const logo = window.document.querySelector('.navbar-brand')
    t.is(logo.textContent, 'atomicmonkey')
        //   t.is(element.className, 'red')
        //   t.is(window.getComputedStyle(element).color, 'red')
})

test('Route / exists and renders a title', async t => {
    const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
    const element = window.document.querySelector('#title')
    t.not(element, null)
})

// Close the Nuxt server
test.after('Closing server', t => {
    nuxt.close()
})