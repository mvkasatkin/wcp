import * as React from 'react'
import Typography from '@material-ui/core/Typography'

interface Props {
}

class List extends React.Component<Props> {

  render () {
    return (
      <div>
        <Typography variant="headline" gutterBottom>Пользователи</Typography>

      </div>
    )
  }
}

export { List }
