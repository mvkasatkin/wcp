import { connect } from 'react-redux'
import { IState } from '../../../store/state'
import Login, { Props } from '../components/Login'
import AdminService from '../services/AdminService'

const mapStateToProps = (state: IState): Props => ({
  hasError: state.auth.hasError,
  onSubmitLogin: AdminService.login.bind(AdminService),
})

export default connect(mapStateToProps)(Login)
