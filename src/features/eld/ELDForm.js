import Header from "../../layout/Header"
import Sidebar from "../../layout/Sidebar"

const ELDForm = () => {
  const pageHead =''
  return (
    <>
      <div id="layout-wrapper">
      <Header pageHead={pageHead}/>
            <Sidebar/>
      <div className="main-content">

<div className="page-content" style={{background:"#eff3f6"}}>
    <div className="container-fluid">

        
        <div className="row">
            <div className="col-9 mt-3 mx-auto">
                <div className="page-title-box">
                    
  <div className="row">
    
  <div className="col-7">
  <div className="row">
    <h3 className="text-capitalize"><strong>ELD Device Info</strong></h3>
  </div>
  </div>		
    <div className="col-4 ps-5">
  <div className="d-inline-flex">
    
  <div className="col-sm-5">
  <div className="form-group">
  
                     <button className="btn cancel-btn btn border border-color d-block  bg-white ">Cancel</button>
    </div>
    </div>

  <div className="col-sm-10">
  <div className="form-group">
  
                    <button type="button" className="btn d-block add-button" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen"><i className="dripicons-plus font-size-20 vertical-align-top"></i> &nbsp; Add ELD Devices</button>
    </div>
    </div>
      
      
    
    </div>
    </div>
  </div>
  
  
  <div className="row mt-4">
  <div className="col-md-12">
    <div className="card">
    <div className="card-body">
    <form className="search-data add-driver">

      
      
                     <div className="row">
              <div className="col-md-12 mb-4">
                <div className="mb-0">
                 <label  className="form-label">ELD SN (Serial Number)</label>
                  <input type="text" className="form-control"  placeholder=""  required=""/>

                </div>
                <span className="form-label">Please make sure ELD SN was entered correctly. Once the eld record is created it cannot be changed.</span>
              </div>
                

            </div>
      

                                            <div className="row">
              <div className="col-md-12 mb-4 ">
                <div className="mb-0">
                 <label  className="form-label">ELD MAC Address</label>
                  <input id="input-mask" placeholder="_:__:__:__:__" className="form-control input-mask" data-inputmask="'mask': '99-9999999999'" inputmode="text"/>

                </div>
                <span className="form-label mb-4">Please make sure ELD MAC Address was entered correctly. Once the eld record is created it cannot be changeds.</span>
              </div>
                

            </div>
      
      
                       <div className="row">
              <div className="col-md-12 mb-4">
                <div className="mb-0">
                 <label  className="form-label">Assign Vehicle</label>
                  <select className="form-control select2">
                    <optgroup>												<option value="AK">No vechile</option>
                                                <option value="HI">700</option>
                  <option value="Ho">7001s</option>
                      </optgroup>

                  </select>

                </div>
                <span className="form-label mb-4">Mobile app will automaticly connect to eld device during login process.</span>
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
        {/* <!-- end page title --> */}
        


       
        {/* <!-- end row--> */}

        
    </div> 
    {/* <!-- container-fluid --> */}
</div>
{/* <!-- End Page-content --> */}


</div>
      </div>
    </>
  )
}

export default ELDForm