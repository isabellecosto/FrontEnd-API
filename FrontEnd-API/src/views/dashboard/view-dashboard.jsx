import AppDashboard from "../../components/app-dashboard/app-dashboard";
import AppBody from "../../components/app-body/app-body";
import './view-dashboard.scss';

const ViewDashboard = () => {
    return (
        <div className="dashboard">
            <AppDashboard />
            <AppBody />
        </div>
    )
}

export default ViewDashboard;