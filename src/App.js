import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users: users}))
  }

  render() {    
    return (
      <div className="App">
        {
          this.state.users.map(user => <h1 key={user.id}>{ user.name }</h1>)
        }
      </div>
    )
  }
}

export default App;
