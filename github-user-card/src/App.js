import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './Components/Card';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: '',
      info: {},
    }
  }
  fetchData = () => {
    if (this.state.users) {
    axios.get(`https://api.github.com/users/${this.state.users}`)
    .then(res => {
      this.setState({
        info: res.data
      })
      console.log(this.state.info)
    })
    .catch(err => console.log(err))
  } else {
    axios.get(`https://api.github.com/users/ohfr`)
    .then(res => this.setState({
      info: res.data
    }))
    .catch(err => console.log(err))
  }
  }
  componentDidMount() {
    this.fetchData();
    
  }
  handleChange = (e) => {
    this.setState({
      users: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData();
    this.setState({
      users: ''
    })
  }
  render () {
    return (
      <div className="App">
        <div className="heading">
          <h1>Github User Card</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.users} placeholder="Search for handles" onChange={this.handleChange} />
          </form>
        </div>
        <Card info={this.state.info} />
      </div>
    )
  }
}
