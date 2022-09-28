import React from 'react';

const Billmanager = ()=>{
  const[label, setLabel]= useState([]);
  const[input, setInput]= useState(0);
  const[netpay, setNetpay]= useState(0);

  const Deductions=()=>{
    const[food, setFood] = useState([]);
    const[rent, setREnt] = useState(0);
    const[shopping, setShopping] = useState([]);
  }
    
    return(

        <header className='Bills'>

         <div className='net-income'>
         <h1>Bill Manager</h1>
         <label >Net Salary</label>
        <input type='number' name = 'text' amount = 'Ksh' ></input>  <br></br>  <br></br>

        </div>

     <div className='Expenses' >

     <label >Travel</label>
  <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input> <br></br> <br></br>

  <label >Rent</label>
  <input type='number' name = 'text' placeholder='Ksh' amount= 'Ksh' ></input>  <br></br>  <br></br>

  <label >Food</label>
  <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>  <br></br>  <br></br>

  <label >Shooping</label>
  <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>  <br></br>  <br></br>
{/* 
  <label >Entertainment</label>
  <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>  <br></br>  <br></br>
 */}

  {/* <label >Salon</label>
  <input type='number' name = 'text' placeholder='Ksh' amount='Ksh' ></input>  <br></br>  <br></br> */}

  </div>

  <div className='total-expenses'> 
  <input type='number' name = 'number' amount = 'Ksh' ></input>  <br></br>  <br></br>

  <input type='number' name = 'number' amount = 'Ksh' ></input>  <br></br>  <br></br>
     </div>
           <button className='add' onClick='add'>Add</button>
 
             <div className='balance'>
           <label >Balance</label>
      <input type='number' name = 'text' amount = 'Ksh' ></input>  <br></br>  <br></br>
      </div>

  </header>

    )
}
export default Billmanager;