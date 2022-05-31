import Header from "../../layout/Header"
import Sidebar from "../../layout/Sidebar"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { manageVehicle} from "./vehiclesSlice"

const VehicleForm = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        id:'',
        companyId:'4f41c8d2-457a-4893-ad58-187f6c95fb15',
        vehicleNumber: '',
        vehicleModel:'',
        make:'',
        vin:'',
        year:'',
        plateLicenseState:'',
        fuelType:'',
        eld:'',
        plateNumber:''
    });
    
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    const submitHandler = (event)=>{
        event.preventDefault();
        console.log(values)
        dispatch(manageVehicle(values))
    }
    const pageHead = ''
    return (
        <>
        <div id='layout-wrapper'>
            <Header pageHead={pageHead}/>
            <Sidebar/>
            <div className="main-content">
                <div className="page-content" style={{background:'#eff3f6'}}>
                    <div className="container-fluid">
                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-10 mt-3 mx-auto">
                                <div className="page-title-box">
                                    <form className="search-data add-driver" onSubmit={submitHandler}>
                                        <input type="hidden" value={values.companyId} name="companyId"/>
                                        <input type="hidden" value={values.id} name="id"/>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="row">
                                                    <h3 className="text-capitalize"><strong>Vechile Info</strong></h3>
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
                                        
                                                            <button type="submit" className="btn d-block w-100 add-button"><i className="dripicons-plus font-size-20 vertical-align-top"></i> Add Vehicle</button>
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
                                                                    <label  className="form-label">Vehicle ID</label>
                                                                    <input type="text" value={values.vehicleNumber} onChange={handleChange('vehicleNumber')} className="form-control"  placeholder=""  required=""/>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-4">
                                                                    <label for="validationCustom01" className="form-label">Make </label>
                                                                    <input type="text" value={values.make} onChange={handleChange('make')} className="form-control"  placeholder=""  required=""/>

                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-4">
                                                                    <label for="validationCustom02" className="form-label">Model </label>
                                                                    <input type="text" value={values.vehicleModel} onChange={handleChange('vehicleModel')} className="form-control" id="validationCustom02" placeholder=""  required=""/>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="mb-4">
                                                                    <label  className="form-label">year</label>
                                                                    <input type="text" value={values.year} onChange={handleChange('year')} className="form-control"  placeholder=""  required=""/>

                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="row">
                                                            <div className="col-md-12 mb-4">
                                                                <div className="mb-0">
                                                                    <label  className="form-label">VIN</label>
                                                                    <input type="text" value={values.vin} onChange={handleChange('vin')} className="form-control"  placeholder="" required=""/>
                                                                </div>
                                                                <span className="form-label">Please make sure your VIN was entered correctly. Once the vehicle record is created its VIN cannot be changed.
                                                                </span>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="mb-4">
                                                                    <label  className="form-label">Fuel Type</label>
                                                                    {/* <SelectDropdown type={1} options={['Diesl','Petrol']}/> */}
                                                                    <select className="form-control form-select" onChange={handleChange('fuelType')}>
                                                                        <option value="disel">Diesl</option>
                                                                        <option value="petrol">Petrol</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>    
                                                
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-4">
                                                                    <label for="validationCustom01" className="form-label">Plate License Issuing State </label>
                                                                    <select className="form-control form-select" onChange={handleChange('plateLicenseState')}>
                                                                        <option value="Alaska">Alaska</option>
                                                                        <option value="Hawaii">Hawaii</option>
                                                                    </select>
                                                                </div>
                                                            <div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-4">
                                                            <label for="validationCustom02" className="form-label">License Plate Number </label>
                                                            <input type="text" value={values.licenseNumber} onChange={handleChange('plateNumber')} className="form-control"  placeholder=""  required=""/>

                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="row">
                                            <h3 className="text-capitalize"><strong>ELD Settings</strong></h3>
                                        </div>
                                        
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="mb-4">
                                                                    <label  className="form-label">Assign ELD</label>
                                                                    <select className="form-control select2" onChange={handleChange('eld')}>
                                                                        <option>No ELD</option>
                                                                            <optgroup label="">
                                                                                <option value="123456789">123456789 (C2 12:323:e233:2323)</option>
                                                                            <option value="223456789">123456789 (C2 12:323:e233:2323)</option>
                                                                        </optgroup>
                                                                    </select>
                                                                </div>
                                                            </div>
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
        </>
    )
}

export default VehicleForm