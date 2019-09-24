import React from 'react'
import { CardList } from './components/card-list/card-list.component'
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
        <CardList users={this.state.users} /> 
      </div>
    )
  }
}

export default App;
