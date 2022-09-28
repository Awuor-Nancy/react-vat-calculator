import React from 'react';
import Billmanager from './Billmanager';

const Taxcalculator = ({grossSalary})=>{  

    return(
        <form className='Tax'>

      <div className='total-income'>
        <h1>Gross Salary</h1>
        <label >Ksh</label>
        <input type='number' name = 'text' amount = 'Ksh' ></input>  <br></br>  <br></br>

        </div>

           <div className='Deductions' >
        <label >Netpay</label>
        <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input> <br></br> <br></br>

        <label >NSSF Contribution</label>
        <input type='number' name = 'text' placeholder='Ksh' amount= 'Ksh' ></input>  <br></br>  <br></br>

        <label >Taxable Income</label>
        <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>  <br></br>  <br></br>

        <label >Tax Before Relief</label>
        <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>  <br></br>  <br></br>

        <label >Personal Relief</label>
        <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>  <br></br>  <br></br>

        <label >Health Insurance Relief</label>
        <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>  <br></br>  <br></br>

        <label >PAYE</label>
        <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>   <br></br>  <br></br>

        <label >NHIF Contribution</label>
        <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>    <br></br>  <br></br>

        <a href='Billnanager' Billmanager={Billmanager} >Manage bills</a>

        </div>

        </form>
    )
}
export default Taxcalculator;