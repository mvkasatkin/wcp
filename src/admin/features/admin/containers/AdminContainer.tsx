import { connect } from 'react-redux'
import { IState } from '../../../store/state'
import Admin, { Props } from '../components/Admin'
import adminService from '../services/AdminService'

const mapStateToProps = (state: IState): Props => ({
  loggedIn: !!state.auth.user,
  onLogout: adminService.logout.bind(adminService),
})

export default connect(mapStateToProps)(Admin)
