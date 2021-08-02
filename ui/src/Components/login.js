import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost/PracticalTest/bizlogic/index.php';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          msg:'',
        }
      }

      
handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);

    axios({
        method: 'GET',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
        .then(result => {
          this.setState({
            msg: result.data.username
          })
        })
        .catch();
        
  }

    render() {
        return (
            <div className="" id="Body">
                <div className="">
                    <h3>Login</h3>
                    
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}/>

                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
                    <input type="submit" className="button success" value="Login" onClick={e => this.handleFormSubmit(e)} />
                </div>
            </div>
        );
    }

}


export default Login;