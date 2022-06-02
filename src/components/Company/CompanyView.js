import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"

const CompanyView = () => {
  const pageHead = 'Company Details'
  return (
    <>
      <div id="layout-wrapper">
        <Header pageHead={pageHead}/>
        <Sidebar/>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-10 mt-3 mx-auto">
                  <div className="page-title-box">
                    <div className="row flex-row">
                      <div className="float-start col-sm-3">
                        <h3 className="text-capitalize"><strong>ABC Trans Inc</strong></h3>
                      </div>		
                      <div className="col-9 pe-4">
                        <div className="row float-end">
                          <div className="col-sm-12" style={{padding: '0 5px'}}>
                            <button type="button" className="btn d-block add-button-edit "><i className="fa fa-edit"></i> Edit</button>
                    
                          </div>
                        </div>
                      </div>										
                    </div>									

                    <div className="row mt-5">
                      <div className="col-4">
                          <address>
                              <h4 className="text-capitalize">General Inforamtions</h4>
                          </address>
                      </div>
                                                
                      <div className="col-2 ps-1 pe-1">
                          <address>
                              Company ID:
                              <br/>Company Name:<br/>
                              DOT Number:<br/>
                              Company Time Zone:<br/>
                              Company Address:
                          </address>
                      </div>
                              
                      <div className="col-5">
                              <address>
                                  <strong>Company:ID<br/>
                                  ABC Trans Inc<br/>
                                  0000000<br/>
                                  ET<br/>
                                  1 Cristina Ln, Oxford PA, 19363</strong>
                              </address>
                          </div>
                    </div>
                    <hr/>
                
                    <div className="row mt-5">
                        <div className="col-4">
                            <address>
                                <h4 className="text-capitalize">Carrier Settings</h4>
                            </address>
                        </div>
                        <div className="col-2 ps-1 pe-1">
                            <address>
                                Compliance Mode::
                                <br/>Vehicle Motion Threshold::<br/>
                                Cycle Rule:<br/>
                                Cargo Type:<br/>
                                Restart:<br/>
                                Rest Break:<br/>
                                Short-Haul Exception:<br/>
                                Split-Sleeper Birth<br/>
                                Personal Conveyance:<br/>
                                Yard Move:<br/>
                                Manual Move:
                                
                            </address>
                        </div>
              
                        <div className="col-5">
                            <address>
                                <strong>ELD<br/>
                                5 mi/h<br/>
                                USA 70 hour/8 day<br/>
                                Property<br/>
                                34 Hour Restart<br/>
                                30 Minute Break Required<br/>
                                Forbidden<br/>
                                    Forbidden<br/>
                                    Forbidden<br/>
                                    Forbidden<br/>
                                    Forbidden<br/>
                                    
                                    
                                    </strong><br/>
                            </address>
                        </div>
                    </div>
                
                    <hr/>
                
                    <div className="row mt-5">
                      <div className="col-4">
                          <address>
                            <h4 className="text-capitalize">Terminal 1</h4>
                          </address>
                      </div>

                      <div className="col-2 ps-1 pe-1">
                        <address>
                        Terminal  Address:
                        <br/>Time Zone:<br/>
                        </address>
                      </div>
                      <div className="col-5">
                        <address>
                          <strong>1 Cristina Ln, Oxford PA, 19363<br/>
                          ET<br/>
                          </strong>
                        </address>
                      </div>
                    </div>
                    <hr/>
                    <div className="row mt-5">
                      <div className="col-4">
                          <address>
                            <h4 className="text-capitalize">Terminal 2</h4>
                          </address>
                      </div>
                      <div className="col-2 ps-1 pe-1">
                        <address>
                        Terminal  Address:<br/>
                        Time Zone:<br/>
                        </address>
                      </div>
                      <div className="col-5">
                        <address>
                          <strong>
                            1 Cristina Ln, Oxford PA, 19363<br/>
                                                          ET<br/>
                          </strong>
                        </address>
                      </div>
                    </div>
                    <hr/>
                    <div className="row mt-5">
                      <div className="col-4">
                          <address>
                            <h4 className="text-capitalize">Intergrations</h4>
                          </address>
                      </div>
                      <div className="col-4 ps-1 pe-1">
                        <div className="card">
                          <div className="card-body">
                            <form className="search-data add-driver">
                              <img src="/assets/images/projec-44.jpg" alt="project-44"	className="img-fluid" />	
                              <div className="row">
                                <div className="col-md-12 ">
                                  <div className="mt-2 ms-2">
                                    <div>
                                      <div className="form-check form-check-right">
                                        <label className="form-check-label" htmlFor="formCheckRight1">
                                            Integrations:&nbsp; ON
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>                     
                      </div>
                      <div className="col-4">
                        <div className="card">
                          <div className="card-body"> 
                            <form className="search-data add-driver">
                              <img src="/assets/images/decrete.jpg" alt="img-discrete"	className="img-fluid" />		
                          
                              <div className="row">
                                <div className="col-md-12 ">
                                  <div className="mt-2 ms-2">
                                    <div>
                                      <div className="form-check form-check-right">
                                          
                                          <label className="form-check-label" >
                                              Integrations:&nbsp; OFF
                                          </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyView