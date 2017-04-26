import { Router } from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ReactRouter from 'react-router'
import App from '../../client/App'

const router = Router();

router.get('*', function(request, response) {
    const props = {title: 'Universal React'}

    ReactRouter.match({
      routes: (
        <ReactRouter.Router history={ReactRouter.browserHistory}>
            <ReactRouter.Route path='/' component={App}>
            </ReactRouter.Route>
        </ReactRouter.Router>
      ),
      location: request.url
    }, function(error, redirectLocation, renderProps) {
      if (renderProps) {
        const html = ReactDOMServer.renderToString(
          <ReactRouter.RouterContext {...renderProps} />
        );

        response.send(html);
      } else {
        response.status(404).send('Not Found');
      }
    });
});

export default router
