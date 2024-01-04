import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';
import data from "../data.json"


const Signup = () => {
    // State variables for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [submissionStatus, setSubmissionStatus] = useState(null);


// useEffect to fetch countries from the REST Countries API

useEffect(() => {
    // Fetch countries from the JSON file
    const countryList = data.countries.map(country => country.name);
    setCountries(countryList.slice(0, 10));
}, []);

useEffect(() => {
    if (selectedCountry) {
        // Find the selected country object from the JSON file
        const selectedCountryData = data.countries.find(country => country.name === selectedCountry);

        if (selectedCountryData) {
            // Fetch states based on the selected country from the JSON file
            const stateList = selectedCountryData.states.map(state => state.name);
            setStates(stateList.slice(0, 10));
        }
    }
}, [selectedCountry]);

useEffect(() => {
    if (selectedState) {
        // Find the selected state object from the JSON file
        const selectedStateData = data.countries
            .flatMap(country => country.states)
            .find(state => state.name === selectedState);

        if (selectedStateData) {
            // Fetch cities based on the selected state from the JSON file
            const cityList = selectedStateData.cities;
            setCities(cityList.slice(0, 10));
        }
    }
}, [selectedState]);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!firstName ||
            !email ||
            !password ||
            password.length < 8 || // Minimum password length check
            password !== confirmPassword || // Password match check
            !selectedCountry ) {
            setSubmissionStatus('error');
            return;
        }

        // If all data is valid, you can make an API request to submit the form data
        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    country: selectedCountry, 
                    state: selectedState, 
                    city: selectedCity, 
                }),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                window.alert('Successfully registered !');
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionStatus('error');
        }
    };

    return (
        <>
        <div>
        <Navbar/>
        <div className='container'> 
            <form onSubmit={handleSubmit}>
            <h3 style={{textAlign:'center'}}>Registration Form</h3>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                    <span style={{color:'red'}}>*</span>
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder='Enter your first name'
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder='Enter your last name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    <span style={{color:'red'}}>*</span>
                        Email
                    </label>
                    
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder='Enter your mail id'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                {/* Add the country, state, and city dropdowns */}
                <div className="mb-3">
                    <label htmlFor="countryDropdown" className="form-label">
                    <span style={{color:'red'}}>*</span>
                        Country
                    </label>
                    <select
                        id="countryDropdown"
                        className="form-select"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                    >   
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="stateDropdown" className="form-label">
                        State
                    </label>
                    <select
                        id="stateDropdown"
                        className="form-select"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="cityDropdown" className="form-label">
                        City
                    </label>
                    <select
                        id="cityDropdown"
                        className="form-select"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                    <span style={{color:'red'}}>*</span>
                        Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        value={password}
                        placeholder ='Enter password' 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    <span style={{color:'red'}}>*</span>
                       Confirm password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder ='Re-enter password' 
                        value={confirmPassword}
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary m-2">
                    Register 
                </button>
            <button className="btn btn-success m-2">
                <Link to="/studentlogin" className="text-white text-decoration-none">
                    Already have account ? Click here to Login !
                </Link>
            </button>
            </form>
            <footer style={{backgroundColor:'#a2c9c9' , textAlign:'center', margin:'5px'}}>
                <p><span style={{color:'red'}}>*</span>Fildes are mandetory</p>
            </footer>
            {submissionStatus === 'success' &&  <div className="alert alert-success m-3">Form submitted successfully ! Thank you for Register !  <Link to='/studentlogin'>Now Login by clicking on this</Link> </div>}
            {submissionStatus === 'error' && <div className="alert alert-danger m-3">Error submitting form. Please try again.</div>}
        </div>
        </div>
        </>
    );
};

export default Signup;

