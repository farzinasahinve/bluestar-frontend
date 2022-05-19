import React from 'react'

const SecurityInfo = () => {
  return (
    <fieldset>
      <div class="form-card">
        <div class="form-group mb-3 row">
          <div class="col-12">
            <label class="form-label ms-1 mb-1 font-light">Phone Number *</label>
            <input class="form-control" type="text" placeholder="Phone Number"/>
          </div>
        </div>                          
                                  

									
        <div class="form-group mb-3 row">
          <label class="form-label ms-1 mb-1 font-light">Password *</label>
          <div class="col-12">
              <input class="form-control" type="text"  placeholder="At least 8 Character"/>
          </div>
        </div>
									
									
        <div class="form-group mb-3 row">
          <label class="form-label ms-1 mb-1 font-light">Confirm Passowrd *</label>
          <div class="col-12">
              <input class="form-control" type="Email" required="" placeholder="At least 8 Character"/>
          </div>
        </div>
									
        <div class="form-group mb-3 row">
                          <div class="col-12">
                              <div class="form-check">
                                              <input class="form-check-input" type="checkbox" id="formCheck2" checked=""/>
                                              <label class="form-check-label" for="formCheck2">
                                                  Form Checkbox checked
                                              </label>
                                          </div>
          
                          </div>
        </div>

      </div>
      <button name="create" class=" btn btn-primary  wave-effect wave-light custom-btn  float-right">Create &nbsp;<i class="fa fa-plus" aria-hidden="true"></i></button>
      <button type="button" name="previous" class="previous btn btn-outline-secondary  custom-btn" value="Previous"><i class="dripicons-arrow-thin-left" aria-hidden="true"></i>&nbsp; Back</button>
                               
    </fieldset>
  )
}

export default SecurityInfo