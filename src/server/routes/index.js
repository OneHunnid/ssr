import { Router } from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"
import webpack from "webpack"

import webpackConfig from "../../../webpack.config"
// import App from '../../client/App'

const compiler = webpack(webpackConfig)
const router = Router();

router.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}))

router.use(webpackHotMiddleware(compiler))

router.get('*', function(request, response) {
  // const props = {title: 'Universal React'}
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={request.url} context={context}>
      <html>
        <head>
          <title>React SSR</title>
          <link rel="stylesheet" href="/bundle.css" />
        </head>
        <body>
          <div id="root"></div>
          <script src="/bundle.js" />
        </body>
      </html>
    </StaticRouter>
  );

  if (context.url) {
    response.writeHead(301, {
      Location: context.url
    })
    response.end()
  } else {
    response.send(html)
    response.end()
  }
});

export default router
