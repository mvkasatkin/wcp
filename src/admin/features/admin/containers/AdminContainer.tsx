import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { IState } from '../../../store/state'
import Admin, { Props } from '../components/Admin'

const mapStateToProps = (state: IState): Props => ({
  loggedIn: !!state.auth.user,
})

export default withRouter<any>(connect(mapStateToProps)(Admin))
