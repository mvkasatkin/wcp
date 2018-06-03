import { connect } from 'react-redux'
import { IState } from '../../../store/state'
import Admin, { Props } from '../components/Admin'

const mapStateToProps = (state: IState): Props => ({
  loggedIn: !!state.admin.user,
})

export default connect(mapStateToProps)(Admin)
