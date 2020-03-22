import React from 'react';

class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      error: '',
      inserting : false
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
        error:'processing...',
        inserting:true
      });

      fetch('https://f8lo.herokuapp.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: this.state.url })
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            error:'ok',
            inserting:false
          });
          window.location.href = '/detail?url='+this.state.url;
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
        { this.state.inserting ? null : <button onClick={this.validateUrl}>
          Submit
        </button> }
        {this.state.error ? <div role="alert">{this.state.error}</div> : null}
      </div>
    );
  }
}

export default Insert;