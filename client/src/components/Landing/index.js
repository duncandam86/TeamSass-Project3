import React, { Component } from 'react';
import './style.css';

const Landing = props => {
	// Notice how each input has a `value`, `name`, and `onChange` prop
	return (
		<div>
			<div id="jumbotron">
				<h2 style={{ marginTop: 75, marginBottom: 50 }}>On The FLy</h2>
				<form>
            <div className="SignupForm">
                {/* <h4>Join for free</h4> */}
                <label className="Username"></label>
                <br></br>
                <input className="col-8 form-control"
                    value={props.username}
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="Password"></label>
                <input className="col-8 form-control"
                    value1={props.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Sign Up
            </button>
			<p><center>OR</center></p>
			<button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Login
            </button>

        </form>
			</div>
		</div>
	);
}

export default Landing;
