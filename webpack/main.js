const main = require('../dist/main.js')
const client = require('../dist/client.js')
const express = require('express')
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const app = express()
const port = 3000

/**
 * 模版生成 vue ssr
 */

/**
 * 客户端渲染
 */
app.use('/dist', express.static('dist'))

app.get('*', function(req, res) {
    res.end(`
          <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="utf-8">
            <title>Hello</title>
        </head>
        <body>
            <div>hello world</div>
            <div id="app"></div>
            <script src="/dist/client.js"></script>
        </body>
    </html>`)
})


/**
 * 服务端渲染完成
 */
// app.get('*', function(req, res) {
//     const common = {url: req.url}
//     main.renderApp(common).then(apps => {
//         renderer.renderToString(apps, (err, html) => {
//             if (err) {
//               if (err.code === 404) {
//                 res.status(404).end('Page not found')
//               } else {
//                 res.status(500).end('Internal Server Error')
//               }
//             } else {
//               res.end(`
//               <!DOCTYPE html>
//         <html lang="en">
//             <head>
//             <meta charset="utf-8">
//                 <title>Hello</title>
//             </head>
//             <body>
//                 ${html}
//             </body>
//         </html>`)
//             }
//           })
//     }).catch(e => {console.log(e, '2222')})
// })

/**
 * 服务端渲染与客户端激活方式
 */

//  app.use('/dist', express.static('dist'))

//  app.get('*', function(req, res) {
//     const common = {url: req.url}
//     main.renderApp(common).then(apps => {
//         renderer.renderToString(apps, (err, html) => {
//             if (err) {
//               if (err.code === 404) {
//                 res.status(404).end('Page not found')
//               } else {
//                 res.status(500).end('Internal Server Error')
//               }
//             } else {
//               res.end(`
//             <!DOCTYPE html>
//             <html lang="en">
//                 <head>
//                 <meta charset="utf-8">
//                     <title>Hello</title>
//                 </head>
//                 <body>
//                     ${html}
//                     <div id="app">
//                     </div>
//                     <script src="/dist/client.js"></script>
//                 </body>
//             </html>`)
//             }
//           })
//     }).catch(e => {console.log(e, '2222')})
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})