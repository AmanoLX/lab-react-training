import React, { Component } from 'react';

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: '',
  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  // handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   this.setState({
  //     email: value,
  //   });
  // };

  // handlePasswordlChange = (e) => {
  //   const value = e.target.value;
  //   this.setState({
  //     password: value,
  //   });
  // };

  // handleNationalityChange = (e) => {
  //   const value = e.target.value;
  //   this.setState({
  //     nationality: value,
  //   });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, nationality } = this.state;
    if (nationality === 'en') {
      alert(`Hello, your email is ${email}.`);
    }
    if (nationality === 'de') {
      alert(`Hallo, your email is ${email}.`);
    }
    if (nationality === 'fr') {
      alert(`Bonjour, your email is ${email}.`);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Nationality:</label>
          <select
            name="nationality"
            value={this.state.nationality.value}
            onChange={this.handleChange}
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignupPage;
