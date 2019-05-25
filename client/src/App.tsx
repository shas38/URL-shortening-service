import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';
import InputURL from './InputURL';
import NewURL from './NewURL';
type State = {
  inputURL: string,
  shortenURL: string,
  message: string,
  copied: boolean,
}
// Main class for combining all the components
class App extends Component {
  state: State
  constructor(props: any){
    super(props)
    this.state = {
      inputURL: '',
      shortenURL: '',
      message: '',
      copied: false,
    };
  }
  ValidURL = (url: string) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  }

  GetURL = async () => {

    if(this.ValidURL(this.state.inputURL)){
      const postData = {"url": this.state.inputURL};
      let data: any = await fetch('/api/shortenurl', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(postData), // body data type must match "Content-Type" header
      });
      data = await data.json();
      this.setState({shortenURL: data.shortURL, copied: false})
    }
    else{
      alert(`${this.state.inputURL} is not a valid URL`)
    }


  }

  NewinputURL = async (e: any)=>{
    await this.setState({ inputURL: e.target.value })
  }

  setCopiedToTrue = async () => {
    await this.setState({ copied: true })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <InputURL
              NewinputURL={this.NewinputURL}
              GetURL={this.GetURL}
            />
            <NewURL
              shortenURL={this.state.shortenURL}
              copied={this.state.copied}
              setCopiedToTrue={this.setCopiedToTrue}
            />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;