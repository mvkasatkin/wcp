import { connect } from 'react-redux'
import { IState } from '../../../store/state'
import Side, { Props } from '../components/Side'
import adminService from '../services/AdminService'

const mapStateToProps = (state: IState): Props => ({
  items: state.nav.items,
  toggleItem: adminService.toggleItem.bind(adminService),
})

export default connect(mapStateToProps)(Side)
