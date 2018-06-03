import { connect } from 'react-redux'
import { IState } from '../../../store/state'
import Main, { Props } from '../components/Main'
import adminService from '../services/AdminService'

const mapStateToProps = (state: IState): Props => ({
  onLogout: adminService.logout.bind(adminService),
})

export default connect(mapStateToProps)(Main)
