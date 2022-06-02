import { useState, useEffect } from "react"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import { useSelector, useDispatch} from "react-redux"
import { getVehicles } from "../../actions/vehicleAction"
import { Link } from "react-router-dom"

const Vehicles = () => {
    const dispatch = useDispatch()
    const [searchKey, setsearchKey] = useState("");
    const [searchStatus, setsearchStatus] = useState("");
    const {vehicles} = useSelector(state => state.vehicles)
    const totalRecords = vehicles?.TotalRecord

    const submitHandler = (e) => {
        e.preventDefault();
        if (searchKey !== "" || searchStatus !== "") {
            dispatch(getVehicles(searchKey,searchStatus));
        }
    };
    useEffect(()=>{
            dispatch(getVehicles())
    },[dispatch])
    	
    const pageHead = `Vehicles(${totalRecords})`
    return (
        <>
        <div id="layout-wrapper">
            <Header pageHead={pageHead}/>
            <Sidebar/>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="search-data">
                                        <div className="row">
                                            
                                            <div className="col-10 flex-grow-1">
                                                <form className="search-data" onSubmit={submitHandler}>
                                                    <div className="row">
                                                        <div className="col col-sm-5">
                                                            <div className="form-group app-search p-0 ">
                                                                <label>&nbsp;</label>
                                                                <div className="position-relative">
                                                                    <input type="text" value={searchKey} onChange={e=>setsearchKey(e.target.value)} className="form-control font-size-11" placeholder="Search by Vehicle ID or VIN Number"/>
                                                                    <span className="ri-search-line"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col  col-sm-5">
                                                            <div className="form-group">
                                                                <label className="form-label">Filter by Status</label>
                                                                <select className="form-select" onChange={e=>setsearchStatus(e.target.value)}>
                                                                    <option value="">Select</option>
                                                                    <option value="active">Active</option>
                                                                    <option value="inactive">Inactive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col col-sm-2">
                                                            <div className="form-group">
                                                                <label className="form-label">&nbsp;</label>
                                                                <button type="submit" className="btn btn border border-color d-block filter-button">Filter</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>		
                                    
                                            
                                            <div className="col-auto col-2">
                                                <div className="d-inline-flex">
                                                    <div className="col-sm-10">
                                                        <div className="form-group">
                                                            <label className="form-label">&nbsp;</label>
                                                            <Link to="/settings/vehicles/create" className="btn d-block add-button" ><i className="dripicons-plus font-size-20 vertical-align-top"></i> &nbsp; Add Vehicle</Link>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="col-sm-2">
                                                        <div className="form-group">
                                                            <label className="form-label">&nbsp;</label>
                                                            <button className="btn btn border border-color d-block "><i className=" fas fa-sync"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive mb-0">
                                    <table align="left"  className="table table-background   dt-responsive " style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%"}}>
                                        <thead>
                                            <tr>
                                                <th width="10%" valign="middle" >VEHICLE ID <i className="ri-arrow-down-line font-size-14"></i></th>
                                                <th  width="10%" valign="middle">LICENSE PLATE</th>
                                                <th width="10%" valign="middle" align="center">YEAR</th>
                                                <th  width="18%" valign="middle" >MAKE/MODEL</th>
                                                <th  width="18%" valign="middle" >VIN</th>
                                                <th  width="18%" valign="middle" >ELD SN (MAC)</th>
                                                <th width="10%"  valign="middle" >STATUS</th>
                                                <th width="10%" valign="middle" >ACTION</th>
                                                
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {vehicles.vehicles && vehicles.vehicles.map((vehicle,idx) => (
                                            <tr key={idx}>
                                                <td>{vehicle.vehicleNumber}</td>
                                                <td>{vehicle.plateNumber}</td>
                                                <td>{vehicle.year}</td>
                                                <td>{vehicle.make}/{vehicle.vehicleModel}</td>
                                                <td>{vehicle.vin}</td>
                                                <td>{vehicle.eld}</td>
                                                <td>{vehicle.active === true ? 'Active': 'Inactive'}</td>
                                                <td><Link to={`/settings/vehicles/${vehicle.id}`}><i className="far fa-edit font-size-20  color-grey"></i></Link></td>
                                            </tr>
                                        ))}
                                            
                                                
                                        </tbody>
                                    </table>

                                </div>
                            </div>  
                            {/* end col */}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Vehicles