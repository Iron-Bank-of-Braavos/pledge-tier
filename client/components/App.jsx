import React from 'react';
import axios from 'axios';
import PledgesList from './PledgesList.jsx';
import Support from './Support.jsx';

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
    let num = Math.floor(Math.random() * 101);
    console.log(num);
    axios.get('/api/rewards', {params: {projectId: num}})
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
        <Support />
        <PledgesList pledges={this.state.pledges}/>
      </div>
    );
  }
}

export default App;