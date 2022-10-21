import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Signup</h2>
            <form>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" required />
            </div>
            <input className='btn-submit' type="submit" value="Signup" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login Please</Link></p>
        </div>
    );
};

export default Signup;