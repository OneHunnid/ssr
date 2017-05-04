import { Router } from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from '../../client/App'

const router = Router();

router.get('*', function(request, response) {
  const props = {title: 'Universal React'}
  const context = {}

  const html = ReactDOMServer.renderToString(
    // <StaticRouter location={request.url} context={context}>
      <App {...props}/>
    // </StaticRouter>
  );

  if (context.url) {
    response.writeHead(301, {
      Location: context.url
    })
    response.end()
  } else {
    // console.log('ELSE CONTEXT Status: ' + context.status);
    response.send(html)
    response.end()
  }
});

export default router

// This is for React-Router V3
    // match({routes, location: request.url}, (error, redirectLocation, renderProps) => {
    //   if (error) {
    //     response.status(500).send(error.message)
    //   } else if (redirectLocation) {
    //     response.redirect(302, redirectLocation.pathname + redirectLocation.search)
    //   } else if (renderProps) {
    //     response.status(200).send(ReactDOMServer.renderToString(<RouterContext {...renderProps} />))
    //   } else {
    //     response.status(404).send('Not found')
    //   }
    // });



    // const props = {title: 'Universal React'}
    //
    // ReactRouter.match({
    //   routes: (
    //     <ReactRouter.Router history={ReactRouter.browserHistory}>
    //         <ReactRouter.Route path='/' component={App}>
    //         </ReactRouter.Route>
    //     </ReactRouter.Router>
    //   ),
    //   location: request.url
    // }, function(error, redirectLocation, renderProps) {
    //   if (renderProps) {
    //     const html = ReactDOMServer.renderToString(
    //       <ReactRouter.RouterContext {...renderProps} />
    //     );
    //
    //     response.send(html);
    //   } else {
    //     response.status(404).send('Not Found');
    //   }
    // });
