import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios'
import Select from "react-select";

import { useReactToPrint } from "react-to-print";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function Header() {
 const[var_no,setVar_no]=useState("");
 const[ac_name,setAc_name]=useState("");
 const[ac_amount,setAc_amount]=useState("");
 const[status,setStatus]=useState("");
 const[var_date,setVar_date]=useState("");

 const[sr_no,setSr_no]=useState("");
 const[item_code,setItem_code]=useState("");
 const[item_name,setItem_name]=useState("");
 const[description,setDescription]=useState("");
 const[qut,setQut]=useState("");
 const[rate,setRate]=useState("");
 const[total,setTotal]=useState("");

 const[data,setData]=useState([])



 const[sr_no_get,setSr_no_get]=useState("");
 const[item_code_get,setItem_code_get]=useState("");
 const[item_name_get,setItem_name_get]=useState("");
 const[description_get,setDescription_get]=useState("");
 const[qut_get,setQut_get]=useState("");
 const[rate_get,setRate_get]=useState("");
 const[total_get,setTotal_get]=useState("");

 const[alertuse,setAlertuse]=useState("")
 const[flag_data,setFlagdata]=useState("")
function getStaffname(){
        axios
          .get("http://localhost:8000/master/details/")
              .then ((res)=>{
                          setData(res.data)       
              })        
      }
             
function getButtonflag(){
  axios
  .get("http://localhost:8000/master/flagind/1")
      .then ((res)=>{
                 setFlagdata(res.data[0].button_flag) 
                //  alert(res.data[0].button_flag)      
      })      
} 

const conponentPDF= useRef();
const sum = data.reduce((acc, item) => acc + item.amount, 0);



 useEffect (()=>{
       getStaffname()
       getButtonflag()
       
   },[])

  const handleTypeSelect = e => {
   setStatus(e.target.value);
    };
  const generatePDF=useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle:"Userdata",
    // onAfterPrint:()=>alert("Data saved in PDF")
  });

var local_varno=window.localStorage.getItem('local_var_no')
var localac_name=window.localStorage.getItem('local_ac_name')
var localvar_date=window.localStorage.getItem('local_var_date')
var localstatus=window.localStorage.getItem('local_status')
// setVar_no(local_varno)
var varnofield=<input type="text" value={local_varno} ref={conponentPDF}  onChange={ (e)=>setVar_no(e.target.value)}  ></input>
var acnamefield=<input type="text" value={localac_name} ref={conponentPDF}   onChange={ (e)=>setAc_name(e.target.value)}  ></input>
var datefield=<input aria-label="Date and time" value={localvar_date} ref={conponentPDF} onChange={ (e)=>setVar_date(e.target.value)} type="datetime-local" />
var statusfield=
<select    value={localstatus}  onChange={handleTypeSelect}>
<option value="">Select Status</option>
  <option value="Active">A</option>
  <option value="Inactive">I</option>
</select>
// if(local_varno == null){
//   var varnofield=<input type="text"  ref={conponentPDF}  onChange={ (e)=>setVar_no(e.target.value)}  ></input>
// }
// else{
//   var varnofield=<input type="text" value={local_varno} ref={conponentPDF}  onChange={ (e)=>setVar_no(e.target.value)}  ></input>
// }
//  if (local_ac_name == null){
//   var acnamefield=<input type="text"  ref={conponentPDF}   onChange={ (e)=>setAc_name(e.target.value)}  ></input>
// }
// else{
//   var acnamefield=<input type="text" value={local_ac_name} ref={conponentPDF}   onChange={ (e)=>setAc_name(e.target.value)}  ></input>
// }
// if(local_var_date == null){
//   var datefield=<input aria-label="Date and time"  ref={conponentPDF} onChange={ (e)=>setVar_date(e.target.value)} type="datetime-local" />
// }
// else{
//   var datefield=<input aria-label="Date and time" value={local_var_date} ref={conponentPDF} onChange={ (e)=>setVar_date(e.target.value)} type="datetime-local" />
// }
// if(local_status == null){
//   var statusfield=
//   <select      onChange={handleTypeSelect}>
//   <option value="">Select Status</option>
//     <option value="Active">A</option>
//     <option value="Inactive">I</option>
//   </select>
// }
// else{
//   var statusfield=
//                 <select    value={local_status}  onChange={handleTypeSelect}>
//                 <option value="">Select Status</option>
//                   <option value="Active">A</option>
//                   <option value="Inactive">I</option>
//                 </select>
// }


var acamountfield=<input type="text" ref={conponentPDF} value={sum}   onChange={ (e)=>setAc_amount(e.target.value)}  ></input>





var srnofield=<input type="text"  ref={conponentPDF}  onChange={ (e)=>setSr_no(e.target.value)}  ></input>
var itemcodefield=<input type="text"  ref={conponentPDF}  onChange={ (e)=>setItem_code(e.target.value)}  ></input>
var itemnamefield=<input type="text" ref={conponentPDF}    onChange={ (e)=>setItem_name(e.target.value)}  ></input>
var desc=<input type="text" ref={conponentPDF}   onChange={ (e)=>setDescription(e.target.value)}  ></input>
var qutfield=<input type="number"  ref={conponentPDF}  onChange={ (e)=>setQut(e.target.value)}  ></input>
var ratefield=<input type="number"  ref={conponentPDF}   onChange={ (e)=>setRate(e.target.value)}  ></input>
var calculate= qut*rate
var totalfield=<input type="text" ref={conponentPDF}   value={calculate}  onChange={ (e)=>setTotal(e.target.value)}  ></input>


const handleNew =(e)=>{
    e.preventDefault()
    const confirmBox = window.confirm(
      "Do you really want to Open New Session?"
    )
    if (confirmBox === true) {
    axios
    .delete("http://localhost:8000/master/all-detail-delete/")
    .then((res)=>{
      localStorage.removeItem("local_var_no");
      localStorage.removeItem("local_ac_name");
      localStorage.removeItem("local_var_date");
      localStorage.removeItem("local_status");

      axios.post("http://localhost:8000/master/flag/",
                                     
        {
          "button_flag":"False"
        })

     }) 
    .then((res)=>{
     
    
      window.location.reload()
    })
  }
}

const handeleSubmit =(e)=>{
        e.preventDefault()
                  
                    // alert(ac_name)
                    // alert(sum)
                    // alert(status)
                    // alert(var_date)
          const confirmBox = window.confirm(
                      "Do you really want to Save This Session?"
                    )
                    if (confirmBox === true) {   
                  
      if(var_no !="" & var_date !="" & ac_name !=""){
           
        axios.post("http://localhost:8000/master/header/",
                                     
                         {
                              'var_no':var_no,
                              'ac_name':ac_name,
                              "ac_amount":sum,
                              "status":status,
                              "var_date":var_date,
                                        // "time":date,
                                
                         }               
                )
                .then((res)=>{
                          // alert("saved")
                          axios.post("http://localhost:8000/master/item-data/",{

                          "detail_data":JSON.stringify({
                            data

                          }),
                          "var_no":var_no
                          } )
                          .then((res)=>{

                            axios.post("http://localhost:8000/master/flag/",
                                     
                              {
                                "button_flag":"True"
                              })
                  
                           }) 
                          .then((res)=>{
                            alert("saved")
                            window.location.reload()
                          })
                          }) 
                         
                        
                    
                  }

      else{
        var testPassed2 = "false";
        if( local_varno != null){
                        testPassed2 = "true";
                        
                      }
        else{
                  testPassed2 = "false"; 
                  setAlertuse( 
                          <Alert severity="error">Please Enter Var No.</Alert>
                  )
                      
            }
        if( testPassed2 == "true" ){
          if(localac_name !=""){
                  testPassed2 = "true";

          }  
          else{
              
              testPassed2 = "false";
              setAlertuse( 
                <Alert severity="error">Please Enter Account Name.</Alert>
              ) 
              }
        }      

      if( testPassed2 == "true" ){
          if(localvar_date !=""){
                  testPassed2 = "true";

              }  
          else{
                
              testPassed2 = "false"; 
              setAlertuse( 
                <Alert severity="error">Please Enter Date & Time.</Alert>
              ) 
            }
          }

      if( testPassed2 == "true" ){
          if(localstatus !=""){
                  testPassed2 = "true";

          }  
          else{
                
              testPassed2 = "false";
              setAlertuse( 
                <Alert severity="error">Please Select Status.</Alert>
              )  
              }
        }      
      
    if( testPassed2 == "true" ){

      axios.post("http://localhost:8000/master/header/",
                                     
        {
             'var_no':local_varno,
             'ac_name':localac_name,
             "ac_amount":sum,
             "status":localstatus,
             "var_date":localvar_date,
                       // "time":date,
               
        }               
)
   .then((res)=>{
         // alert("saved")
         axios.post("http://localhost:8000/master/item-data/",{

         "detail_data":JSON.stringify({
           data

         }),
         "var_no":local_varno
         } )
         .then((res)=>{

          //  alert("saved")
          axios.post("http://localhost:8000/master/flag/",
                                     
            {
              "button_flag":"True"
            })

         }) 
        .then((res)=>{
          alert("saved")
          window.location.reload()
        })
       
   })
 }
     }
    }
     }             
                
  

const detailSubmit =(e)=>{
                    e.preventDefault()
                    // alert(var_no)
                    // alert(item_code)
                    // alert(sr_no)
                    // alert(item_name)
                    // alert(description)
                    // alert(qut)
                    // alert(rate)
                    // alert(calculate)
                    
  var testPassed = "false";
      if(var_no !="" || local_varno != null){
                      testPassed = "true";
                      
                    }
      else{
                testPassed = "false"; 
                setAlertuse( 
                        <Alert severity="error">Please Enter Var No.</Alert>
                )
                    
          }
  if( testPassed == "true" ){
      if(item_code !=""){
              testPassed = "true";

      }  
      else{
           
           testPassed = "false";
           setAlertuse( 
            <Alert severity="error">Please Enter Item Code.</Alert>
          ) 
          }
    }      

  if( testPassed == "true" ){
      if(item_name !=""){
              testPassed = "true";

          }  
      else{
            
           testPassed = "false"; 
           setAlertuse( 
            <Alert severity="error">Please Enter Item Name.</Alert>
          ) 
        }
      }

  if( testPassed == "true" ){
      if(description !=""){
              testPassed = "true";

      }  
      else{
            
           testPassed = "false";
           setAlertuse( 
            <Alert severity="error">Please Enter Description.</Alert>
          )  
          }
    }      
  if( testPassed == "true" ){
    if(qut !=""){

              testPassed = "true";

          }  
    else{
            
           testPassed = "false"; 
           setAlertuse( 
            <Alert severity="error">Please Enter Qut.</Alert>
          )  
          }
    }
  if( testPassed == "true" ){
      if(rate !=""){
              testPassed = "true";

      }  
     else{
           
           testPassed = "false"; 
           setAlertuse( 
            <Alert severity="error">Please Enter Rate.</Alert>
          )  
          }
    }

    if( testPassed == "true" ){
      if(ac_name !="" | localac_name != null){
              testPassed = "true";

      }  
     else{
           
           testPassed = "false"; 
           setAlertuse( 
            <Alert severity="error">Please Enter Account Name in Header Table.</Alert>
          )  
          }
    }
    if( testPassed == "true" ){
      if(var_date !="" | localvar_date !=null){
              testPassed = "true";

      }  
     else{
           
           testPassed = "false"; 
           setAlertuse( 
            <Alert severity="error">Please Enter Account Date in Header Table.</Alert>
          )  
          }
    }
    if( testPassed == "true" ){
      if(status !="" | localstatus!=null){
              testPassed = "true";

      }  
     else{
           
           testPassed = "false"; 
           setAlertuse( 
            <Alert severity="error">Please Select Status in Header Table.</Alert>
          )  
          }
    }
   
      
  if( testPassed == "true"){
    var varno=var_no
    if (varno ==""){
     
      varno=local_varno
    }
    // alert(localac_name)
    // alert(localstatus)
    // alert(localvar_date)
 
    
              axios.post("http://localhost:8000/master/details/",
                                     
                         {
                              'var_no':varno,
                    //           'sr_no':sr_no,
                              "item_code":item_code,
                              "item_name":item_name,
                              "description":description,
                              "qut":qut,
                              "rate":rate,
                              "amount":calculate             
                                
                         }               
                    )
                    .then((res)=>{
                  //     if(res.data.rate == "A valid integer is required."){
                  //       setAlertuse( 
                  //         alert("A valid integer is required.Rate Must Be Integer")
                  //       )  
                  //     }
                  //    else if ( res.data.qut == "A valid integer is required."){
                  //     setAlertuse( 
                  //       alert("A valid integer is required.Qut Must Be Integer")
                  //     )  
                  //    }
                    
                  // else{
                  //   alert("work")

                    if(local_varno == null){
                        window.localStorage.setItem('local_var_no', var_no);
                    }
                    if(localac_name == null){
                    
                      window.localStorage.setItem('local_ac_name', ac_name);
                    }
                     if (localvar_date == null){
                      window.localStorage.setItem('local_var_date', var_date);
                    }
                    if (localstatus == null){
                        window.localStorage.setItem('local_status', status); 
                    }
                       
                  
                  
                      window.location.reload()
                      
                    })
                  }
                  // else{
                  //   alert("detail post not working")
                  // } 
            }
                 
  

  function Deleterow(rowid){
      axios
      .delete(`http://localhost:8000/master/details-delete/${rowid}`)
      .then((res)=>{
        window.location.reload()
      })
   }                    
if(flag_data == "False"){
  return (
    <div ref={conponentPDF} style={{width:'100%'}}>
          <br></br>
            <div class="row">
              <div class="col-4">
              </div>
              <div class="col-4">
                  {alertuse}
              </div>
              <div class="col-4">
              </div>
            </div>
        
  <br></br><br></br>
      
  <div  style={{ border: '3px solid black' }} >
      <br></br>
      <h2 style={{fontfamily: "Times, Times New Roman, serif"}}>Header</h2>
      <br></br>
      <div class="container text-center" >
        <div class="row">
            <div class="col">
              <b>Var_no</b><br></br> 
                {varnofield} 
            </div>
            <div class="col">
              <b>Date</b> <br></br> 
               {datefield}
            </div>
            <div class="col">
              <b>Status</b> <br></br>  
              {statusfield}
            </div>
        </div>
      </div>
<br></br>
<div class="container text-center" >
  <div class="row">
    <div class="col">
      <b>Ac Name</b>  <br></br> 
      {acnamefield}
    </div>
    <div class="col">
      <b> Ac Amount</b> <br></br> 
      {acamountfield}
    </div>
  </div>
</div>
<br></br>
</div>
<br/>

<div style={{ border: '3px solid black' }}>
    <h2 style={{fontfamily: "Times, Times New Roman, serif"}}>Details</h2>
    <br></br> 
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <b> Item Code</b><br/> 
           {itemcodefield}
        </div>
        <div class="col">
          <b>Item Name</b><br/>  
          {itemnamefield}
        </div>
        <div class="col">
           <b>Description</b>  <br/> 
           {desc}
         </div>
      </div>
    </div>
<br></br>
  <div class="container text-center">
    <div class="row">
      <div class="col">     
         <b>Qut</b> <br/> 
          {qutfield}
       </div>
      <div class="col">
         <b>Rate</b>  <br/> 
         {ratefield}
      </div>
     <div class="col">
       <button class="btn btn-success" onClick={detailSubmit}>Add</button>         
     </div>
  </div>
</div>
<br></br>
 
    
<div>
    <center >
      <table    style={{ border: '3px solid black', width: '70%' }}>
                    
                      <thead>
                        <tr style={{border:"1px solid black"}}>
                        <th style={{border:"1px solid black"}}>Srno</th>
                    <th style={{border:"1px solid black"}}>Item Code</th>
                    <th style={{border:"1px solid black"}}>Item Name</th>
                    <th style={{border:"1px solid black"}}>Qut</th>
                    <th style={{border:"1px solid black"}}>Rate</th>
                    <th style={{border:"1px solid black"}}>Amount</th>
                   
                    </tr>
                      </thead>
                      <tbody>
                               
                         {data .map(item => (
                          <tr key={item.sr_no} style={{border:"2px solid black"}}>
                            <td style={{ padding: '8px', border: "1px solid" }}>{item.sr_no}</td>
                            <td style={{ padding: '8px', border: "1px solid" }}>{item.item_code}</td>
                            <td style={{ padding: '8px', border: "1px solid" }}>{item. item_name}</td>
                            <td style={{ padding: '8px', border: "1px solid" }}>{item.qut}</td>
                            <td style={{ padding: '8px', border: "1px solid" }}>{item.rate}</td>
                            <td style={{ padding: '8px', border: "1px solid" }}>{item.amount} </td>
                            <td style={{ padding: '3px', border: "1px solid" }}><button class="btn btn-danger" onClick={()=>Deleterow(item.sr_no)}>Remove</button> </td>
                          
                           
                         
                           
                          </tr>
                          
                          
                        ))}
                           
                      </tbody>
                    
                    </table>
                    </center>
                   </div>
                    <br></br>
                    <b style={{marginLeft:"500px"}}>Total Amount: {sum}</b>  
                   
    </div>
    <br></br>
    <button class="btn btn-primary" onClick={handeleSubmit}>Save </button> &nbsp;&nbsp;&nbsp;   <button disabled={true} className="btn btn-success" onClick={generatePDF}>Print</button>  &nbsp;&nbsp;&nbsp;     <button class="btn btn-info" onClick={handleNew}>New</button>  
    <br></br>
     
                     
    </div>

  )
}
else {
  return (
  <div ref={conponentPDF} style={{width:'100%'}}>
  <br></br>
    <div class="row">
      <div class="col-4">
      </div>
      <div class="col-4">
          {alertuse}
      </div>
      <div class="col-4">
      </div>
    </div>

<br></br><br></br><br></br>

<div  style={{ border: '3px solid black' }} >
<br></br>
<h2 style={{fontfamily: "Times, Times New Roman, serif"}}>Header</h2>
<br></br>
<div class="container text-center" >
<div class="row">
    <div class="col">
      <b>Var_no</b>  {varnofield} 
    </div>
    <div class="col">
      <b>Date</b>  {datefield}
    </div>
    <div class="col">
      <b>Status</b>  {statusfield}
    </div>
</div>
</div>
<br></br>
<div class="container text-center" >
<div class="row">
<div class="col">
<b>Ac Name</b>  {acnamefield}
</div>
<div class="col">
<b> Ac Amount</b> {acamountfield}
</div>
</div>
</div>
<br></br>
</div>
<br/>

<div style={{ border: '3px solid black' }}>
<h2 style={{fontfamily: "Times, Times New Roman, serif"}}>Details</h2>
<br></br> 



<div>
<center >
<table    style={{ border: '3px solid black', width: '70%' }}>
            
              <thead>
                <tr style={{border:"1px solid black"}}>
                <th style={{border:"1px solid black"}}>Srno</th>
            <th style={{border:"1px solid black"}}>Item Code</th>
            <th style={{border:"1px solid black"}}>Item Name</th>
            <th style={{border:"1px solid black"}}>Qut</th>
            <th style={{border:"1px solid black"}}>Rate</th>
            <th style={{border:"1px solid black"}}>Amount</th>
           
            </tr>
              </thead>
              <tbody>
                       
                 {data .map(item => (
                  <tr key={item.sr_no} style={{border:"2px solid black"}}>
                    <td style={{ padding: '8px', border: "1px solid" }}>{item.sr_no}</td>
                    <td style={{ padding: '8px', border: "1px solid" }}>{item.item_code}</td>
                    <td style={{ padding: '8px', border: "1px solid" }}>{item. item_name}</td>
                    <td style={{ padding: '8px', border: "1px solid" }}>{item.qut}</td>
                    <td style={{ padding: '8px', border: "1px solid" }}>{item.rate}</td>
                    <td style={{ padding: '8px', border: "1px solid" }}>{item.amount} </td>
                 
                  
                   
                 
                   
                  </tr>
                  
                  
                ))}
                   
              </tbody>
            
            </table>
            </center>
           </div>
            <br></br>
            <b style={{marginLeft:"300px"}}>Total Amount: {sum}</b>  
           
</div>
<br></br>
   <button className="btn btn-success" onClick={generatePDF}>Print</button>  &nbsp;&nbsp;&nbsp;     <button class="btn btn-info" onClick={handleNew}>New</button>  
<br></br>

             
</div>

)
}
}

export default Header
