import * as React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

interface Props {
  is: boolean,
  title: string,
  width?: 'xs' | 'sm' | 'md' | false,
  actionsSlot?: React.ReactElement<any>,
  onClose: () => void,
  onCancel?: () => void, // required to show button
  onApply?: () => void, // required to show button
}

class Modal extends React.Component<Props> {
  onCancel = () => { this.props.onCancel && this.props.onCancel(); this.props.onClose() }
  onApply = () => { this.props.onApply && this.props.onApply(); this.props.onClose() }

  render () {
    const { is, title, onClose, onCancel, onApply, width, children, actionsSlot } = this.props

    return (
      <Dialog open={is}
              onClose={onClose}
              maxWidth={width}
              fullWidth={true}
              aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>

        <DialogContent>{children}</DialogContent>

        {actionsSlot ? actionsSlot : (
          <DialogActions>
            <DialogActions>
              {onCancel && <Button onClick={this.onCancel} color="primary">Отменить</Button>}
              {onApply && <Button onClick={this.onApply} variant="raised" color="secondary">Применить</Button>}
            </DialogActions>
          </DialogActions>
        )}
      </Dialog>
    )
  }
}

export default Modal
