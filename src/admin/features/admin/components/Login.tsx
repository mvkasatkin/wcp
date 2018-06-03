import * as React from 'react'
import Card from '@material-ui/core/Card'
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl/FormControl'
import InputLabel from '@material-ui/core/InputLabel/InputLabel'
import Input from '@material-ui/core/Input/Input'
import Button from '@material-ui/core/Button'
import TransitionComeIn from '../../../shared/transitions/TransitionComeIn'
import TransitionFadeIn from '../../../shared/transitions/TransitionFadeIn'

const styles = (theme: Theme) => ({
  root: {
    margin: '150px auto 0 auto',
    maxWidth: '400px',
  },
  form: {
    padding: theme.spacing.unit * 3,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  formControl: {
    width: '100%',
    margin: `${theme.spacing.unit}px 0`,
  },
  button: {
    marginTop: theme.spacing.unit,
  },
})

export type Props = {
  hasError: boolean,
  onSubmitLogin: (login: string, password: string) => void,
}
type StyledProps = Props & WithStyles<keyof ReturnType<typeof styles>>

class Login extends React.Component<StyledProps> {
  refLogin: HTMLInputElement
  refPassword: HTMLInputElement

  onSubmit = (e: React.SyntheticEvent<any>) => {
    e.preventDefault()
    const login = this.refLogin ? this.refLogin.value : ''
    const password = this.refPassword ? this.refPassword.value : ''
    this.props.onSubmitLogin(login, password)
  }

  render() {
    const { classes, hasError } = this.props

    return (
      <div>
        <TransitionComeIn height={50} duration={500}>
          <Card className={classes.root}>
            <form onSubmit={this.onSubmit} className={classes.form}>

              <TransitionFadeIn delay={400} duration={300}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="wcp-login" error={hasError}>Логин</InputLabel>
                  <Input id="wcp-login" inputRef={ref => this.refLogin = ref} error={hasError}/>
                </FormControl>
              </TransitionFadeIn>

              <TransitionFadeIn delay={600} duration={300}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="wcp-password" error={hasError}>Пароль</InputLabel>
                  <Input id="wcp-password" type={'password'} inputRef={ref => this.refPassword = ref} error={hasError}/>
                </FormControl>
              </TransitionFadeIn>

              <TransitionFadeIn delay={800} duration={300}>
                <Button onClick={this.onSubmit}
                        className={classes.button}
                        variant="raised"
                        color="primary">
                  Войти
                </Button>
              </TransitionFadeIn>
            </form>
          </Card>
        </TransitionComeIn>
      </div>
    )
  }
}

export default withStyles(styles as any)(Login)
