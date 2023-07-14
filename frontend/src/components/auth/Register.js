import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { setAlert } from '../../actions/alert';

const Register = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        email: '',
        password: '',
        password_confirm: ''
    });

    const { name, phone_number, email, password, password_confirm} = formData;

    const onChange = e => 
        setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if(password !== password_confirm) {
            setAlert('Passwords do not match', 'danger', 3000);
        } else {
            console.log(formData);
        }
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={name} 
                        onChange={e => onChange(e)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={email} 
                        onChange={e => onChange(e)}
                        required
                    />
                    <small className="form-text">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Phone" 
                        name="phone_number" 
                        value={phone_number} 
                        onChange={e => onChange(e)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password} 
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password_confirm"
                        minLength="6"
                        value={password_confirm} 
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    )
}

export default connect(
    null, 
    { setAlert }
)(Register);
