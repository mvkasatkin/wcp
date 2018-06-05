import * as React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AdminContainer from './features/admin/containers/AdminContainer'

import theme from './config/theme'
import store from './store'

export default () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AdminContainer />
        </MuiThemeProvider>
      </React.Fragment>
    </Provider>
  )
}
