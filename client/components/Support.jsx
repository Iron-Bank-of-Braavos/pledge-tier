import React from 'react';

class Support extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pledge: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('the pledge ', this.state.pledge);
    this.setState({
      pledge: ''
    });
  }

  handleChange(e) {
    this.setState({
      pledge: e.target.value
    });
  }

  render() {
    return (
      <div>
      <h3>Support</h3>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value="5"/>
      </form>
    </div>
    )
    
  }
}

export default Support;