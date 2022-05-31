import Header from "../../layout/Header"
import Sidebar from "../../layout/Sidebar"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {getELDS,getAllELDs} from "./eldSlice"

const ELD = () => {
    const dispatch = useDispatch()
    // const [searchKey, setsearchKey] = useState("");
    // const [searchStatus, setsearchStatus] = useState("");
    const records = useSelector(getAllELDs)
    const status = records.status
    const totalRecords = records.totalRecords
    //const error = useSelector(getDriverError)
    useEffect(()=>{
        if(status==='idle'){
            dispatch(getELDS())
        }
    },[status,dispatch])
    //console.log(drivers);
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     if (searchKey === "" && searchStatus === "") return alert("Please enter search term!");
    //     dispatch(getELDS(searchKey,searchStatus));
    // };
  const pageHead = 'ELD Devices(62)'
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
                        <form className="search-data">
                            <div className="row">
                                <div className="col-9 flex-grow-1">
                                    <div className="row">
                                        <div className="col col-sm-5">
                                            <div className="form-group app-search p-0 ">
                                                <label>&nbsp;</label>
                                                <div className="position-relative">
                                                    <input type="text" className="form-control font-size-11" placeholder="Search by ELD SN or MAC Address"/>
                                                    <span className="ri-search-line"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col  col-sm-7">
                                            <div className="form-group">
                                                <label className="form-label">Filter by Status</label>
                                                <select className="form-select" aria-label="Active">
                                                    <option value="">Active</option>
                                                    <option value="1">Active</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>		
                        
                                
                                <div className="col-auto col-3">
                                    <div className="d-inline-flex">
                                        <div className="col-sm-10">
                                            <div className="form-group">
                                                <label className="form-label">&nbsp;</label>
                                                <Link to='/settings/elds/add' className="btn d-block add-button" ><i className="dripicons-plus font-size-20 vertical-align-top"></i> &nbsp; Add ELD Device</Link>
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
                        </form>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive mb-0">
                    <table align="left"  className="table table-background   dt-responsive " style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%"}}>
                      <thead>
                        <tr>
                          <th valign="middle"  width="10%">ELD SN (MAC)<i class="ri-arrow-down-line font-size-14"></i></th>
                          <th valign="middle"  width="18%">ELD MODEL</th>
                          <th width="30%" valign="middle">ASSIGNED VEHICLE</th>
                          <th  width="10%" valign="middle" >BLE VERSION</th>
                          <th  width="10%" valign="middle" >FIRMWARE VERSION</th>
                          <th width="10%"  valign="middle" >STATUS</th>
                          <th width="10%" valign="middle" >ACTION</th>
                        </tr>
                      </thead>

                      <tbody>
                      
                          
                              
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

export default ELD