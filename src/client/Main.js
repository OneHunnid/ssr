import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'

import Home from './Home'
import NotFound from './NotFound'

const Main = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

// class Main extends React.Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <main>
//         <Switch>
//           <Route path="/" component={Home} />
//           <Route path="/error" component={NotFound} />
//         </Switch>
//       </main>
//     )
//   }
// }

export default Main;
