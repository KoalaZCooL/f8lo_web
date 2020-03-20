import React from 'react';

class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      error: ''
    };
    this.addUrl = this.addUrl.bind(this)
    this.validateUrl = this.validateUrl.bind(this)
  }

  addUrl(e){
    this.setState({
      url:e.target.value
    });
  }

  validateUrl(){
    if(0===this.state.url.indexOf('https://fabelio.com/')){
      this.setState({
        error:'ok'
      });
    }else{
      this.setState({
        error:'invalid link'
      });
    }
  }

  render() {
    return (
      <div className="pageone">
        <label htmlFor="ip">Insert Link</label>
        <input
          id="ip"
          type="text"
          aria-label="insert-link"
          placeholder="https://fabelio.com/"
          value={this.state.url}
          onChange={this.addUrl}
        />
        <button onClick={this.validateUrl}>
          Submit
        </button>
        {this.state.error ? <div role="alert">{this.state.error}</div> : null}
      </div>
    );
  }
}

export default Insert;