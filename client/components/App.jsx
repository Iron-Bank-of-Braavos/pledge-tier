import React from 'react';
import axios from 'axios';
import PledgesList from './PledgesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pledges: []
    }
    this.fetchPledges = this.fetchPledges.bind(this);
  }

  componentDidMount() {
    this.fetchPledges();
  }

  fetchPledges() {
    axios.get('/api/rewards')
    .then((res) => {
      console.log(res.data);
      this.setState({
        pledges: res.data
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <p>Hello from App</p>
        <PledgesList pledges={this.state.pledges}/>
      </div>
    );
  }
}

export default App;