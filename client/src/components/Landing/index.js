import React, { Component } from 'react';
import './style.css';
// class Landing extends Component {
//   // Setting the component's initial state
//   state = {
//     firstName: "",
//     lastName: "",
//     password: ""
//   };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     let value = event.target.value;
//     const name = event.target.name;

//     if (name === "password") {
//       value = value.substring(0, 15);
//     }
//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     if (!this.state.firstName || !this.state.lastName) {
//       alert("Fill out your first and last name please!");
//     } else if (this.state.password.length < 6) {
//       alert(
//         `Choose a more secure password ${this.state.firstName} ${this.state
//           .lastName}`
//       );
//     } else {
//       alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//     }

//     this.setState({
//       firstName: "",
//       lastName: "",
//       password: ""
//     });
//   };

function Landing() {
	// Notice how each input has a `value`, `name`, and `onChange` prop
	return (
		<div>
			<div id="jumbotron" backgroundImage="./beach-1.jpg">
				<h2 style={{ marginTop: 150, marginBottom: 50 }}>On The FLy</h2>
				<div className="register" >
					<form className="form">
						<input
							// value={this.state.firstName}
							name="userName"
							// onChange={this.handleInputChange}
							type="text"
							placeholder="Username"
						/>
						<input
							// value={this.state.password}
							name="password"
							// onChange={this.handleInputChange}
							type="password"
							placeholder="Password"
						/>
						<button
						// onClick={this.handleFormSubmit}
						>
							Submit
						</button>
            <p><center>Join for free</center></p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Landing;
