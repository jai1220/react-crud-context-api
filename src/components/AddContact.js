import React from "react";

class AddContact extends React.Component {

    state = {
        name: "",
        email:"",
    }

    add = (e) => {
        e.preventDefault();
        console.log(this.state.name);
        
        if(this.state.name ==="" || this.state.email === ""){
            alert("Please Fill all the fields");
            return false;
        }

        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
    }


    render(){
        return(
          <div className="ui dividing header">
              <h3>Add Contact</h3>
              <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={ (e) => this.setState({ name: e.target.value }) } 
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={ (e) => this.setState({ email: e.target.value }) }
                    />
                </div>
                <button className="ui button blue">Add</button>
              </form>
          </div>  
        );
    }
}

export default AddContact;