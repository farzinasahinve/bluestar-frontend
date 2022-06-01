import {useEffect, useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers,fetchDrivers } from "./driversSlice";
import { Link } from 'react-router-dom'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import {Adb} from '@mui/icons-material';

const Drivers = () => {
    const dispatch = useDispatch()
    const [searchKey, setsearchKey] = useState("");
    const [searchStatus, setsearchStatus] = useState("");
    const drivers = useSelector(getAllDrivers)
    const driverStatus = drivers.status
    const totalRecords = drivers.totalRecords
    //const error = useSelector(getDriverError)
    useEffect(()=>{
        if(driverStatus==='idle'){
            dispatch(fetchDrivers())
        }
    },[driverStatus,dispatch])
    //console.log(drivers);
    const submitHandler = (e) => {
        e.preventDefault();
        if (searchKey === "" && searchStatus === "") return alert("Please enter search term!");
        dispatch(fetchDrivers(searchKey,searchStatus));
    };
    const pageHead = `Driver(${totalRecords})`
    return (
        <>
        <div id="layout-wrapper">
            <Header pageHead={pageHead}/>
            <Sidebar/>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                         {/* start page title  */}
                         <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="row">
                                        <div className="col-9 flex-grow-1">
                                            <form className="search-data" onSubmit={submitHandler}>
                                                <div className="row">
                                                    <div className="col col-sm-5">
                                                        <div className="form-group app-search p-0 ">
                                                            <label>&nbsp;</label>
                                                            <div className="position-relative">
                                                                <input type="text" value={searchKey} className="form-control font-size-11" onChange={e=>setsearchKey(e.target.value)} placeholder="Search by Vehicle ID or VIN Number"/>
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
                                        <div className="col-auto col-3">
                                            <div className="d-inline-flex">
                                                <div className="col-sm-10">
                                                    <div className="form-group">
                                                        <label className="form-label">&nbsp;</label>
                                                        <Link to="" type="button" className="btn d-block add-button" ><i className="dripicons-plus font-size-20 vertical-align-top"></i> &nbsp; Add Driver</Link>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2">
                                                    <div className="form-group">
                                                        <label className="form-label">&nbsp;</label>
                                                        <button type="button" className="btn btn border border-color d-block "><i className=" fas fa-sync"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         {/* end page title */}
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive mb-0">
                                    <table align="left"  className="table table-background   dt-responsive " style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%"}}>
                                        <thead>
                                            <tr>
                                                <th valign="middle"  width="10%">DRIVER <i className="ri-arrow-down-line font-size-14"></i></th>
                                                <th valign="middle"  width="18%">Driver ID</th>
                                                <th width="18%" valign="middle" align="center">E-MAIL ID</th>
                                                <th  width="10%" valign="middle" >PHONE</th>
                                                <th  width="10%" valign="middle" >CYCLE</th>
                                                <th  width="10%" valign="middle" >ASSIGNED VEHICLE</th>
												 <th width="10%"  valign="middle" >APP VERSION</th>
												 <th width="24%"  valign="middle" >STATUS</th>
												 <th width="24%" valign="middle" >ACTION</th>
												
                                            </tr>
                                        </thead>
        
                                        <tbody>
                                        {drivers?.drivers && drivers?.drivers.map((driver,idx) => (
                                            <tr key={idx}>
                                                <td>{driver.firstName}</td>
                                                <td>{driver.firstName}</td>
                                                <td>{driver.userName}</td>
                                                <td>+1 (000) 000-0000</td>
                                                <td>USA 70 hour/ 8 day</td>
                                                <td>7000</td>
                                                <td>
                                                    <Adb className="font-size-24 color-grey"/>1.0.0
                                                </td>
                                                <td>Active</td>
                                                <td><Link to="#"><i className="far fa-edit font-size-20  color-grey"></i></Link></td>
                                            </tr>
                                        ))}
                                            
                                             
                                            </tbody>
                                        </table>
        
								</div>
                            </div>  
                            {/* end col */}
                        </div> 
                        {/* <!-- end row --> */}
        

                       
                         {/* end row */}
                        
                    </div> 
                    {/* container-fluid */}
                </div>
                 {/* End Page-content */}
             
                
            </div>
        </div>
        </>
    )
}

export default Drivers