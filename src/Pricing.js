import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Pricing = () => {
    return (
        <React.Fragment>
        <h2 className='text-center font-weight-bold ' style={{ fontweight:"bold", fontfamily: 'Raleway Regular',fontstyle: "normal",color: "#1e3466",fontsize: "18px"}}>I’M INTERESTED, SEND ME AN OFFER</h2>
       
        <form class="w-75 p-3 mx-auto">
  <div class="form-row">
    <div class="form-group col-md-6">
  
      <input type="email" class="form-control" id="inputEmail4" placeholder="Firstname"/>
    </div>
    <div class="form-group col-md-6">
     
      <input type="password" class="form-control" id="inputPassword4" placeholder="Lastname"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
     
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
     
      <input type="password" class="form-control" id="inputPassword4" placeholder="Job title (optional)"/>
    </div>
  </div>
  <div class="form-group">
   
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
   
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
    
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      
    <select id="inputState" class="form-control" >
        <option selected>Country</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
   */
      <input type="text" class="form-control" id="inputphoneno" placeholder="Phone no"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        JOIN
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary ">SEND REQUEST</button>
</form>
</React.Fragment>
    );
}

export default Pricing