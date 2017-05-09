import { Router } from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from '../../client/App'

const router = Router();

router.get('*', function(request, response) {
  const props = {title: 'Universal React'}
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={request.url} context={context}>
      <App {...props}/>
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
