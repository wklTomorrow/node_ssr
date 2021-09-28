const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const createApp = require('./app')


/**
 * 模版生成 vue ssr
 */

const createApp = require('./entry-server')
app.get('*', function(req, res) {
    const common = {url: req.url}
    createApp(common).then(apps => {
        renderer
        .renderToString(apps, (err, html) => {
            if (err) {
                res.status(500).end('Internal Server Error')
                return;
            }
            res.end(
                `<!DOCTYPE html>
                <html lang="en">
                    <head>
                    <meta charset="utf-8">
                        <title>Hello</title>
                    </head>
                    <body>${html}</body>
                </html>`
            );
        })
    }, err => {console.log(err)}) 
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})