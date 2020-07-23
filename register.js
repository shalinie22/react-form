import React , {Component} from "react";

class Left extends Component{

    constructor (props){
        super(props)
        this.state={
            fname:"",
            lname:"",
            email:"",
            password:"",
            repass:"",
            marital:"",
            food:"",
            countries : [],
			states : [],
            selectedCountry : '--Choose Country--',
            selectedState : '--Choose State--',
            details:[]
		};
		this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);

    }
    componentDidMount() {
		this.setState({
			countries : [
				{ name: 'India', states: [ "TamilNadu" ,"Kerala","Delhi"] },
				{ name: 'USA', states: [ "NewYork","California","Texas" ] },
					]
		});
	}


appendChild = () => {
    let { details } = this.state;
    details.push(details.length); 
    this.setState({details});
  };
changeCountry(event) {
    this.setState({selectedCountry: event.target.value});
    this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
}

changeState(event) {
    this.setState({selectedState: event.target.value});
   }

    handlefname=(e)=>{this.setState(

        {fname:e.target.value,
            
       },
   
        )
}
handlelname=(e)=>{this.setState(
    {
    lname:e.target.value}
    )
}
handleemail=(e)=>{this.setState(
    {email:e.target.value
    }
    )
}
handlepassword=(e)=>{this.setState(
    {
    password:e.target.value}
    )
}
handlerepass=(e)=>{this.setState(
    {
    repass:e.target.value}
    )
}
handlemarital=(e)=>{this.setState(
    {
    marital:e.target.value}
    )
}
handlefood=(e)=>{this.setState(
    {
    food:e.target.value}
    ) 
}
handlecountry=(e)=>{this.setState(
    {
    country:e.target.value}
    
    )  
}

handleform=(e)=>{
   alert(`${this.state.fname},${this.state.lname},${this.state.email},${this.state.food},${this.state.country}`)
}





    render(){
    return (
        
        <>
       
        <div style={{width:"50%",backgroundColor:"whitesmoke",float:"left",height:"100%"}}>
           <center>
               <h1>Register</h1>
               <form onSubmit={this.handleform}>
               <table>
               <tr>
               <td><h5>FirstName</h5></td><td> <input type="text" value={this.state.fname}
        onChange={this.handlefname} /></td></tr>
               <tr><td><h5>LastName </h5></td><td><input type="text" value={this.state.lname}
        onChange={this.handlelname}/></td></tr>
               <tr><td><h5>Email</h5></td><td> <input type="email" value={this.state.email}
        onChange={this.handleemail} /></td></tr>
                <tr><td><h5>Password</h5></td><td> <input type="password" value={this.state.password}
        onChange={this.handlepassword} /></td></tr>
               <tr><td><h5>Retype Password   </h5></td><td><input type="password" value={this.state.repass}
        onChange={this.handlerepass} /></td></tr>
               <tr><td><h5>Maritial Status   </h5></td><td><h6><input type="radio"/>Single<input type="radio"/>Married</h6></td></tr> 
               
               <tr><td> <h5>Choice of food </h5></td>
               <td><select value={this.state.food} onChange={this.handlefood}>
                   <option value="Sandwitch">Sandwitch</option>
                   <option value="Maggi">Maggi</option>
                   <option value="Pizza">Pizza</option>
                   <option value="Burger">Burger</option>
                   </select></td></tr>

                  
                   <tr><td><h5>Country</h5></td>
                   <td><select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
						<option>--Choose Country--</option>
						{this.state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select></td>
                   </tr>
                   <tr><td><h5>State</h5></td>
                   <td><select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
						<option>--Choose State--</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select></td>
                   </tr>
               </table>
               <button type="submit" >Submit</button>
               </form>
           </center>
        </div>
        
        <div style={{width:"50%",float:"right",height:"100%"}}>
        <table>
        <thead>
        <tr>
            <th style={{width:"150px"}} >FirstName</th>
            <th style={{width:"150px"}}>LastName</th>
            <th style={{width:"150px"}}>Email</th>
            <th style={{width:"150px"}}>food</th>
            <th style={{width:"150px"}}>marital status</th>
            <th style={{width:"150px"}}>country</th>
            <th style={{width:"150px"}}>state</th>
        </tr>
        </thead>
        <tbody>
         {this.state.details.map((a, index) => (
            <tr key={index}>
              <td>{a.fname}</td>
              <td>{a.lname}</td>
              <td>{a.email}</td>
              <td>{a.food}</td>
              <td>{a.marital}</td>
              <td>{a.selectedCountry}</td>
              <td>{a.selectedState}</td>
            </tr>
          ))} 
          </tbody>
        </table>
       </div> 
        </>
    )
    }
}
export default Left;