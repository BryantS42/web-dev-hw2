import React, {useState} from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favLinks: [{name:"n1", URL:'https://www.google.com/'}, {name:'n2', URL:'https://www.yahoo.com/'}],
    }
    this.props = props
    //console.log(this.state.favLinks)
  }
 
  handleRemove = (index) => {
            let cState = this.state.favLinks
            delete cState[index];
            this.setState({
              favLinks: cState
            })
            //console.log(this.state.favLinks)
            
  }

  handleSubmit = (favLink) => {
      //console.log('favlink: '+favLink.linkname + ' '+ favLink.url)
      let upState =  this.state.favLinks
      upState.push(favLink)
      this.setState({
        favLinks: upState
      })
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData = {this.state.favLinks} removeLink = {this.handleRemove}/>
        <br />

        <h3>Add New</h3>
        <Form submitForm = {this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
