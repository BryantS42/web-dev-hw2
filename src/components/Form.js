import React, { Component, useState } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
       this.state = {
         name: "",
         URL: ""
       }
  }

  handleChange = (event) => {
    let stateId = event.target.id;
   
      this.setState({
         [stateId]: event.target.value
       })
      //console.log('name: '+this.state.name)
      //console.log('url: '+this.state.url)
  }


  onFormSubmit = (event) => {
    event.preventDefault()
    //console.log(this.state)
    this.props.submitForm(this.state);
    this.setState({
      name: "",
      URL: ""
    })
    event.target.reset();
  }

  render() { 
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label>
        <br/>
        <input type="text" id="name" onChange={this.handleChange} ></input>
        <br/>
        <label>URL</label>
        <br/>
        <input type="text" id="URL" onChange={this.handleChange} ></input>
        <br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
