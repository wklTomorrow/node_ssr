const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const renderer = require('vue-server-renderer').createRenderer()
const Vue = require('vue')

const template = require('fs').readFileSync('./src/vue/index.template.html', 'utf-8')
// const renderer = require('vue-server-renderer').createRenderer({
//     template
// })

app.get('/', (req, res) => {
    let file = null
    fs.readFile('./src/index.html', function(err, data = '') {
        if (err) {
            res.send('好像出错了！！！')
            return
        }
        file = data.toString()
        console.log(res.body)
        res.end(file)
    })
})

app.get('/first', (req, res) => {
    const app = new Vue({
      data: {
        url: req.url
      },
      mounted() {
          console.log('hello world')
      },
      methods: {
        onChange() {
            console.log('hello world')
        }
      },
      template: `<div @click="onChange">访问的 URL 是： {{ url }}</div>`
    })
  
    renderer.renderToString(app, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="utf-8">
                <title>Hello</title>
            </head>
            <body>${html}</body>
        </html>
      `)
    })
})  

/**
 * 模版生成 vue ssr
 */
const context = {
    title: 'vue-ssr'
}
app.get('/vue_ssr', function(req, res) {
    const app = new Vue({
        data: {
          url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })
    renderer
    .renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return;
        }
        res.end(html);
    });
})

const createApp = require('./vueApp')
app.get('/vue_common', function(req, res) {
    const common = {url: req.url}
    const app = createApp(common)
    renderer
    .renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return;
        }
        res.end(html);
    });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})