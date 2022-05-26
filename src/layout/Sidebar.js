import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li>
                            <Link to="/dashboard" className="waves-effect">
                                <i className="ri-home-8-line"></i><span className="badge rounded-pill bg-grey float-end">3</span>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="" className="waves-effect">
                                <i className="ri-time-line"></i>
                                <span>Driver HOS</span>
                            </Link>
                        </li>
            
                        <li>
                            <Link to="" className="waves-effect">
                                <i className="mdi mdi-pulse font-size-24"></i>
                                <span>Logs</span>
                            </Link>
                            
                        </li>

                        <li>
                            <Link to="" className="waves-effect">
                                <i className="ri-truck-line"></i>
                                <span>Assets</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="" className=" waves-effect">
                                <i className="mdi mdi-wrench"></i>
                                <span>DVIR</span>
                            </Link>
                            
                        </li>

                        <li>
                            <Link to="" className=" waves-effect">
                                <i className="ri-stack-line"></i>
                                <span>ELD Events</span>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="" className="has-arrow waves-effect">
                                <i className=" ri-survey-line"></i>
                                <span>Reports</span>
                            </Link>
                            <ul className="sub-menu">
                                <li><Link to="">IFTA</Link></li>
                                <li><Link to="">FMCSA Records</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="waves-effect">
                                <i className="ri-chat-3-line"></i>
                                <span className="badge rounded-pill bg-light float-end">3</span>
                                <span>Chat</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="" className="has-arrow waves-effect">
                                <i className="ri-settings-2-line"></i>
                                <span>Setting</span>
                            </Link>
                            <ul className="sub-menu" aria-expanded>
                                <li><Link to="/settings/drivers">Driver </Link></li>
                                <li><Link to="/settings/vehicles">Vehicles</Link></li>
                                <li><Link to="/settings/elds">ELD Devices</Link></li>
                                <li><Link to="/settings/portal-users">Portal Users</Link></li>
                                <li><Link to="/settings/company">Company</Link></li>
                            </ul>
                        </li>
                    </ul>
                    
                    <Link id="vertical-menu-btn" to="" className="mt-3 text-muted metismenu  d-sm-block align-content-center text-center d-none">
                        <i className="ri-logout-box-r-line font-size-20"></i>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar