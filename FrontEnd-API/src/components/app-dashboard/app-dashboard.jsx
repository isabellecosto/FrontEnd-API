import { NavLink } from "react-router";
import "./app-dashboard.scss";
import Logo from "../../assets/logo.png";

const AppDashboard = () => {
  return (
    <div className="app-dashboard">
      <nav className="app-dashboard__nav">
        <img src={Logo} alt="Logo" />
        <div className="link-design">
          <span className="pi pi-home" style={{ color: '#ffffff' }}></span>
          <NavLink to="/" className={"app-dashboard__nav-item"}>Dashboard</NavLink>
        </div>
        <div className="link-design">
          <span className="pi pi-shopping-cart" style={{ color: '#ffffff' }}></span>
          <NavLink to="/products" className={"app-dashboard__nav-item"}>Products</NavLink>
        </div>
        <div className="link-design">
          <span className="pi pi-user" style={{ color: '#ffffff' }}></span>
          <NavLink to="/users" className={"app-dashboard__nav-item"}>Usuários</NavLink>
        </div>
      </nav>
      <nav className="app-config__nav">
        <div className="link-design">
          <span className="pi pi-cog" style={{ color: '#ffffff' }}></span>
          <NavLink to="/config" className={"app-dashboard__nav-item"}>Configurações</NavLink>
        </div>
        <div className="link-design">
          <span className="pi pi-info-circle" style={{ color: '#ffffff' }}></span>
          <NavLink to="/info" className={"app-dashboard__nav-item"}>Info</NavLink>
        </div>
        <div className="link-design">
          <span className="pi pi-inbox" style={{ color: '#ffffff' }}></span>
          <NavLink to="/contact" className={"app-dashboard__nav-item"}>Contact</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default AppDashboard;
