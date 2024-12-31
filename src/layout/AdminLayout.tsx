import { Outlet } from 'react-router-dom';
import AdminHeaderComponent from '../pages/admin/Header';

const AdminLayout = () => {
    return (
        <>
            <div className="row">
                <div className="admin-header"></div>
                <div className="col-md-2">
                    <AdminHeaderComponent />
                </div>
                <div className="col-md-10">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
  
export default AdminLayout;