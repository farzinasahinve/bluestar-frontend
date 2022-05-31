import Header from "../../layout/Header"
import Sidebar from "../../layout/Sidebar"
import SelectDropdown from "../../helper/SelectDropdown"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addDriver } from "./driversSlice";

const DriverForm = () => {
  const dispatch = useDispatch()
  const pageHead = ''
  let hosRules = ['Property']
  const [values, setValues] = useState({
      username: ''
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(validateDriverForm(values))
    dispatch(addDriver(values))
    // setIsSubmitted(true)
  }
  return (
    <>
    <div id='layout-wrapper'>
      <Header pageHead={pageHead}/>
      <Sidebar/>
      <div className="main-content">
        <div className="page-content" style={{background:"#eff3f6"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mt-3 mx-auto">
                <div className="page-title-box">
                  <form className="search-data add-driver" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-8">
                      <div className="row">
                        <h3 className="text-capitalize"><strong>Personal Info</strong></h3>
                      </div>
                    </div>
                    <div className="col-4 ps-4">
                      <div className="row">
                        <div className="col-sm-5 ps-5">
                          <div className="form-group">
                            <button className="btn cancel-btn btn border border-color d-block  bg-white ">Cancel</button>
                          </div>
                        </div>

                        <div className="col-sm-7">
                          <div className="form-group">
                            <button type="submit" className="btn d-block w-100 add-button"><i className="dripicons-plus font-size-20 vertical-align-top"></i> Add Driver</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="card">
                        <div className="card-body">
                          
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4 user-input">
                                  <label  className="form-label">Driver ID</label>
                                  <input type="text" name="username" value={values.username} className="form-control"  onChange={handleChange('username')} placeholder=""  required=""/>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-4">
                                  <label for="validationCustom01" className="form-label">First name</label>
                                  <input type="text" className="form-control"  placeholder="First name"  required=""/>

                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-4">
                                  <label for="validationCustom02" className="form-label">Last name</label>
                                  <input type="text" className="form-control" id="validationCustom02" placeholder="Last name"  required=""/>

                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4 e-mail-icon">
                                  <label  className="form-label">E-mail</label>
                                  <input type="text" className="form-control"  placeholder=""  required=""/>

                                </div>
                              </div>
                            </div>
                      
                                      <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4 phone-icon">
                                <label  className="form-label">Phone</label>
                                  
                                  <input id="input-mask" placeholder="Tel:(+1)( _ ) - (_____)" className="form-control input-mask" data-inputmask="'mask': '99-9999999'" inputmode="text"/>

                                </div>
                                
                                
                              </div>

                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-4">
                                  <label for="validationCustom01" className="form-label">Password </label>
                                  <input type="text" className="form-control"  placeholder="New Passowrd"  required=""/>

                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-4">
                                  <label for="validationCustom02" className="form-label">Confirm Password </label>
                                  <input type="text" className="form-control"  placeholder="Confirm Passowrd"  required=""/>

                                </div>
                              </div>
                            </div>
                      
                      
                                      <div className="row">
                              <div className="col-md-6">
                                <div className="mb-4">
                                  <label for="validationCustom01" className="form-label">Driving License Issuing State </label>
                                    <SelectDropdown type={2} options={['Alaska','Hawaii']}/>
                                          {/* <select className="form-control select2">
                                              <option>Select</option>
                                              <optgroup label="Alaskan/Hawaiian Time Zone">
                                                  <option value="AK">Alaska</option>
                                                  <option value="HI">Hawaii</option>
                                              </optgroup>
                                          </select> */}
                                        </div>
                                      <div>
                                    </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-4">
                                  <label for="validationCustom02" className="form-label">Driver License Number </label>
                                  <input type="text" className="form-control"  placeholder=""  required=""/>

                                </div>
                              </div>
                            </div>

                          

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <h3 className="text-capitalize"><strong>Carrier Settings</strong></h3>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="card">
                        <div className="card-body">
                          
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4">
                                <label  className="form-label">Home Terminal</label>
                                <select className="form-control select2-search-disable">
                                                            <option value="">Choose Terminal</option>
                                                            <optgroup label="">
                                                                <option value="AK">Cristino Ln, Oxford PA, 19363</option>
                                                              <option value="AK">Cristino Ln, Oxford PA, 19363</option>
                                                            </optgroup>
                                                            
                                                          </select>

                                </div>
                              </div>

                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label for="validationCustom01" className="form-label">Assign Vechiles</label>
                                  <select className="form-control select2">
                                       <option value="">--select--</option>                   
                                      <optgroup label="Alaskan/Hawaiian Time Zone">
                                          <option value="AK">77777</option>
                                          <option value="HI">5555</option>
                                      </optgroup>
                                    
          
                                      
                                  </select>

                                </div>
                              </div>
                              
                            </div>

                                                          <div className="mt-1s">
                            
                            <p className="text-muted mb-3 font-14">
                              Please note: if the <code>alwaysShow</code> option is enabled, the <code>threshold</code> option is ignored.
                            </p>
                                </div>

                          
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <h3 className="text-capitalize"><strong>Log Settings</strong></h3>
                  </div>
          
                  <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="card">
                        <div className="card-body">
                          
                            <div className="form-check mb-3 disabled">
                              <input className="form-check-input text-muted" type="checkbox" id="formCheck1" disabled/>
                              <label className="form-check-label text-muted" for="formCheck1">Form Checkbox </label>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label  className="form-label">HOS Rules</label>
                                  <SelectDropdown type={1} options={hosRules}/>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label for="validationCustom01" className="form-label">Cargo Type </label>
                                  <SelectDropdown type={1} options={['Passenger','Oil and Gas']}/>
                                </div>
                              </div>
                            </div>
                      
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label  className="form-label">Rest Break </label>
                                  <SelectDropdown type={1} options={['30 mint Break','No break required']}/>
                                </div>
                              </div>
                            </div>

                            <div className="form-check mb-3">
                              <input className="form-check-input" type="checkbox" value=""  required=""/>
                              <label className="form-check-label" for="invalidCheck">Allow Short-Haul Exceptaion  </label>
                            </div>
                      
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value=""  required=""/>
                                <label className="form-check-label" for="invalidCheck">Allow Split-sleeper Birth  </label>
                                
                            </div>
                      
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value=""  required=""/>
                                <label className="form-check-label" for="invalidCheck">Allow Personal Conveyance  </label>
                                
                            </div>
                      
                      
                            <div className="form-check mb-3">
                              <input className="form-check-input" type="checkbox" value=""  required=""/>
                              <label className="form-check-label" for="invalidCheck">Allow Yard Move  </label>
                                
                            </div>
                      
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value=""  required=""/>
                                <label className="form-check-label" for="invalidCheck">Allow Manual Driver  </label>
                                
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
            {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </div>
    </>
  )
}

export default DriverForm