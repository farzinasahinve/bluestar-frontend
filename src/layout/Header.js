import { Link } from "react-router-dom"

const Header = ({pageHead}) => {
    return (
        <header id="page-topbar">
            <div className="navbar-header  mt-2 pb-1">
                <div className="d-flex">
                    <div className="navbar-brand-box">
                        <Link to="" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="/assets/images/BLE-Logo.png" alt="logo-sm" height="24"/>
                            </span>
                            <span className="logo-lg">
                                <img src="/assets/images/BLE-Logo.png" alt="logo-dark" height="20"/>
                            </span>
                        </Link>

                        <Link to="" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="/assets/images/logo-sm-light.png" alt="logo-sm-light" height="24"/>
                            </span>
                            <span className="logo-lg">
                                <img src="/assets/images/BLE-Logo.png" alt="logo-light" height="22s"/>
                            </span>
                        </Link>
                    </div>

                    <button type="button" className="btn btn-sm px-2 font-size-24 header-item waves-effect d-sm-none d-block" id="vertical-menu-btn1">
                        <i className="ri-menu-2-line align-middle"></i>
                    </button>
                    <div className="d-none d-lg-block app-search d-no ne d-lg-block pt-4">
                        <h4><strong>{pageHead}</strong></h4>
                    </div>

                </div>
                
                <div className="d-flex badges">
                    <ul className="badges-new">
                        <li ><span className="border-right"><i className="mdi mdi-pokeball font-size-24  align-middle me-1"></i></span></li>
                        <li><span className="badge custom-badges bg-success">D</span> 31</li>
                        <li><span className="badge custom-badges bg-warning">SB</span> 18</li>
                        <li><span className="badge custom-badges bg-primary">ON</span> 7</li>
                        <li><span className="badge custom-badges bg-gray">OFF</span> 3</li>
                        <li><span className="badge custom-badges bg-violet">PC</span> 3</li>
                        <li><span className="badge custom-badges bg-orange">YM</span> 1</li>
                    </ul>
                    <ul className="badges-new">
                        
                        <li ><span className="border-right"><i className="ri-truck-line font-size-24"></i></span></li>
                        <li><i className="ri-send-plane-fill font-size-18 text-success"></i> 31</li>
                        
                        <li><i className="ri-checkbox-blank-circle-fill font-size-18 text-success"></i> 3</li>
                        <li><i className="ri-checkbox-blank-circle-fill font-size-18"></i> 3</li>
                    
                    </ul>
                </div>

                <div className="d-flex">

                    <div className="dropdown d-inline-block d-lg-none ms-2">
                        <button type="button" className="btn header-item noti-icon " id="page-header-search-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-search-line"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-search-dropdown">
                
                            <form className="p-3">
                                <div className="mb-3 m-0">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search ..."/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit"><i className="ri-search-line"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon " id="page-header-notifications-dropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="ri-notification-3-line"></i>
                            <span className="noti-dot"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center border-bottom-new-color">
                                    <div className="col">
                                        <h6 className="m-0"> Notifications </h6>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="#!" className="small"> Mark all as read <i className="ri-mail-settings-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style={{maxHeight: "230px"}}>
                                <Link to="" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs">
                                            <span className="rounded-circle font-size-20 text-orangs">
                                                <i className="mdi mdi-wrench"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 m-0 font-size-13 text-muted">Vechile 7000  has active fault  code</h6>
                                            <div className="font-size-12 text-muted">
                                                
                                                    <p className="m-0"> <small>2minutes ago</small></p>
                                                
                                            </div>
                                        </div>
                                        <div className="iconic"><i className="ri-checkbox-blank-circle-fill text-primary  font-size-7"></i></div>
                                    </div>
                                </Link>

                                <Link to="" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs">
                                            <span className="rounded-circle font-size-20 text-orangs">
                                                    <i className="mdi mdi-speedometer"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 m-0 font-size-13 text-muted">Vechile 7000  has active fault  code</h6>
                                            <div className="font-size-12 text-muted">
                                                
                                                    <p className="m-0"> <small>2minutes ago</small></p>
                                                
                                            </div>
                                        </div>
                                        <div className="iconic"><i className="ri-checkbox-blank-circle-fill text-primary  font-size-7"></i></div>
                                    </div>
                                </Link>

                                <Link to="" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs">
                                            <span className="rounded-circle font-size-20 text-orangs">
                                                    <i className="mdi mdi-text-box-outline"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 m-0 font-size-13 text-muted">Vechile 7000  has active fault  code</h6>
                                            <div className="font-size-12 text-muted">
                                                
                                                    <p className="m-0"> <small>2minutes ago</small></p>
                                                
                                            </div>
                                        </div>
                                        <div className="iconic"><i className="ri-checkbox-blank-circle-fill text-primary  font-size-7"></i></div>
                                    </div>
                                </Link>
                                
                                
                                <Link to="" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs">
                                            <span className="rounded-circle font-size-20 text-orangs">
                                                <i className="ri-time-line"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 m-0 font-size-13 text-orangs">Corey Godman  30 Minutes Break Required  code</h6>
                                            <div className="font-size-12 text-muted">
                                                
                                                    <p className="m-0"> <small>2minutes ago</small></p>
                                                
                                            </div>
                                        </div>
                                        <div className="iconic"><i className="ri-checkbox-blank-circle-fill text-primary  font-size-7"></i></div>
                                    </div>
                                </Link>
                                <Link to="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs">
                                                <span className="rounded-circle font-size-20">
                                                    <i className="ri-time-line"></i>
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="mb-0 m-0 font-size-13 ">Corey Godman  30 Minutes Break Required  code</h6>
                                                <div className="font-size-12 text-muted">
                                                    
                                                        <p className="m-0"> <small>2minutes ago</small></p>
                                                    
                                                </div>
                                            </div>
                                            <div className="iconic"><i className="ri-checkbox-blank-circle-fill text-primary  font-size-7"></i></div>
                                        </div>
                                </Link>
                                <Link to="" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs">
                                            <span className="rounded-circle font-size-20">
                                                <i className="ri-time-line"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 m-0 font-size-13 ">Corey Godman  30 Minutes Break Required  code</h6>
                                            <div className="font-size-12 text-muted">
                                                
                                                    <p className="m-0"> <small>2minutes ago</small></p>
                                                
                                            </div>
                                        </div>
                                        <div className="iconic"><i className="ri-checkbox-blank-circle-fill text-primary  font-size-7"></i></div>
                                    </div>
                                </Link>

                                
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="d-inline-block">
                        <button type="button" className="btn header-item noti-icon " 
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="ri-book-2-line"></i>
                            
                            
                            <span className="noti-dot"></span>
                        </button>
                    
                    
                        <div className="d-inline-block">
                                <button type="button" className="btn header-item noti-icon " 
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ri-moon-line"></i>
                                
                                
                                <span className="noti-dot"></span>
                            </button>
                        </div>


                        <div className="dropdown d-inline-block user-dropdown">
                            <button type="button" className="btn header-item  font-size-13" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="rounded-circle header-profile-user p-2">KP</span>
                                    
                                <span className="d-none d-xl-inline-block text-capitalize ms-1  font-size-14  user-name vertical-middle">Kapil Prajapati<br></br><small>Kapil@gmail.com</small> </span>
                                
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                <Link className="dropdown-item" to="#"><i className="ri-user-line align-middle me-1"></i> Profile</Link>
                                <Link className="dropdown-item" to="#"><i className=" ri-notification-3-line align-middle me-1"></i> Alerts </Link>
                                <Link className="dropdown-item" to="#"><i className="ri-star-s-line align-middle me-1"></i> What's New </Link>
                                <div className="dropdown-divider m-0"></div>
                                <Link className="dropdown-item" to="#"><i className="ri-bank-card-line align-middle me-1"></i> Billing </Link>
                                <Link className="dropdown-item " to="#"><i className="ri-shopping-cart-2-line align-middle me-1"></i> Web Store </Link>
                                <div className="dropdown-divider m-0"></div>
                                <Link className="dropdown-item" to="#"><i className="mdi mdi-api  align-middle me-1"></i> API </Link>
                                
                                <Link className="dropdown-item " to="#"><i className=" ri-logout-box-r-line align-middle me-1"></i> Log out</Link>
                                <div className="dropdown-divider m-0"></div>
                                <ul className="d-inline-flex bootom-links p-r-5 p-0 mb-0">
                                <li><Link className="dropdown-item font-size-9 inline-flex  " to="#"><small>Term Of services</small></Link></li>
                                <li><Link className="dropdown-item  font-size-9 inline-flex " to="#"> <small>Privacy</small></Link></li>
                                </ul>
                                
                                
                            </div>
                        </div>
        
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header