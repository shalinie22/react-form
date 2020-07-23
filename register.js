
import React from "react";

const Left=()=>{
    const [fname,setfname]=React.useState("");
    const [lname,setlname]=React.useState("");
    const [email,setemail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [repass,setrepass]=React.useState("");
    const [state, setstate] = React.useState([]);
    const [marital,setmarital]=React.useState("");
    const [food,setfood]=React.useState("");
    const [country, setcountry] = React.useState("");
   const [selectstate, setselectstate] = React.useState("");
const[arr,setarr]=React.useState([])

 const selection = [
    {
      name: "INDIA",
      states: ["tamilnadu", "kerala", "Delhi"],
    },
    {
      name: "USA",
      states: ["New York", "California", "Texas"],
    },
  ];
  const countrysetting=(e)=> {
    setcountry(e.target.value);
    setstate(selection.filter((d, i) => d.name == e.target.value)[0].states);
  }
    // const handlefname=(e)=>{setfname(e.target.value)}
    // const handlelname=(e)=>{setlname(e.target.value)}
    // const handleemail=(e)=>{setemail(e.target.value)}
    // const handlepassword=(e)=>{setPassword(e.target.value)}
    // const handlerepass=(e)=>{setrepass(e.target.value)}
    // const handlemarital=(e)=>{setmarital(e.target.value)}
    // const handlefood=(e)=>{setfood(e.target.value)}
   
    
    const changeState=(event)=> {setselectstate( event.target.value)}

   function submit() {
       console.log(fname, lname, email, marital, food, country, selectstate)
       console.log("hai")
    if (password === repass) {
      return setarr(
        arr.concat([
          { fname, lname, email, marital, food, country, selectstate },
        ]),
console.log("array",arr),
        setfname(""),
        setlname(""),
        setemail(""),
        setrepass(""),
        setPassword(""),
        setmarital(""),
        setfood(""),
        setcountry("")
      );
    alert("okkk")
    } else {
      alert("confirm password Password is incorrect");
    }
  }

    return(
       
        
         <>
        <div style={{width:"50%",backgroundColor:"whitesmoke",float:"left",height:"100%"}}>
           <center>
               <h1>Register</h1>
               <form >
               <table>
               <thead>
               </thead>
               <tbody>
               <tr>
               <td><h5>FirstName</h5></td><td> <input type="text" value={fname}
        onChange={(e)=>setfname(e.target.value)} /></td></tr>
               <tr><td><h5>LastName </h5></td><td><input type="text" value={lname}
        onChange={(e)=>setlname(e.target.value)}/></td></tr>
               <tr><td><h5>Email</h5></td><td> <input type="email" value={email}
        onChange={(e)=>setemail(e.target.value)} /></td></tr>
                <tr><td><h5>Password</h5></td><td> <input type="password" value={password}
        onChange={(e)=>setPassword(e.target.value)} /></td></tr>
               <tr><td><h5>Retype Password   </h5></td><td><input type="password" value={repass}
        onChange={(e)=>setrepass(e.target.value)} /></td></tr>
               <tr><td><h5>Maritial Status   </h5></td><td><h6><input type="radio" onChange={(e) => setmarital(e.currentTarget.value)}/>Single<input type="radio" onChange={(e) => setmarital(e.currentTarget.value)}/>Married</h6></td></tr> 
                <tr><td> <h5>Choice of food </h5></td>
                <td><select value={food} onChange={(e)=>setfood(e.target.value)}>
                    <option value="Sandwitch">Sandwitch</option>
                    <option value="Maggi">Maggi</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Burger">Burger</option>
                    </select></td></tr>

                  
                    <tr><td><h5>Country</h5></td>
                    <td><select  value={country} onChange={(e)=>countrysetting(e)}>
 						<option>--Choose Country--</option>
              <option>INDIA</option>
              <option>USA</option>
 					</select></td>
                    </tr>
                    <tr><td><h5>State</h5></td>
                    <td><select value={selectstate} onChange={(e)=>changeState(e)}>
 						<option>--Choose State--</option>
 						{state.map((e, key) => {
 							return <option key={key}>{e}</option>;
 						})}
 					</select></td>
                    </tr>
                    
              </tbody>
                 </table>
                </form>
              <button  onClick={() => submit()} >Submit</button>
           </center>
        </div>
        { arr==""?<p>NO DATA</p>:
        <div style={{width:"50%",float:"right",height:"100%"}}>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name:</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Choice of food</th>
                <th>Country</th>
                <th>state</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.email}</td>
                    <td>{data.marital}</td>
                    <td>{data.food}</td>
                    <td>{data.country}</td>
                    <td>{data.selectstate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>}
        </> 
        
    )
}
export default Left
