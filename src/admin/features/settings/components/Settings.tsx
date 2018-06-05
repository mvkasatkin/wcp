import * as React from 'react'
import Typography from '@material-ui/core/Typography/Typography'

interface Props {
}

class Settings extends React.Component<Props> {
  render () {
    return (
      <div>
        <Typography variant="headline" gutterBottom>Настройки</Typography>
      </div>
    )
  }
}

export { Settings }
