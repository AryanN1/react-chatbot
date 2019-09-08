import React, { Component } from 'react';
import axios from 'axios/index';
import Message from './Message';

const baseURL = ''
//'https://warm-basin-86893.herokuapp.com' 

class Chatbot extends Component {


constructor(props) {
  super(props)

  this.state = {
    messages: []
  }

}

async df_text_query(text){
  let says = {
    speaks: 'me',
    msg: {
      text: {
        text: text
      }
    }
  };

  this.setState({ messages: [...this.state.messages, says]});
  console.log(text)
  const res = await axios.post(`${baseURL}/api/df_text_query`, {text: text});

  for (let msg of res.data.fulfullmentMessages) {
    says = {
      speaks: 'bot',
      msg: msg
      }
      this.setState({ messages: [...this.state.messages, says]});
    }
}

async df_event_query(event){
  let body = {
    event: event
  }
  const res= await axios.post( `${baseURL}/api/df_event_query`, body );
  console.log(res.data)
  for (let msg of res.data.fulfillmentMessages){
    let says = {
      speaks: 'me',
      msg: msg
    }
    this.setState({messages: [...this.state.messages, says]});
  }
}


renderMessages(stateMessages){
  if (stateMessages){
    return stateMessages.map((message, i) => {
      return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
    });
  } else {
    return null;
  }
}

componentDidMount() {
  this.df_event_query('Welcome');
}


  render () {
    return (
      <div style={{height: 400, width: 400, float: 'right'}}>
        <div id="chatbot" style={{ height: '100%', width: '100%', overflow: 'auto'}}>
        <h2>Chatbot</h2>
        {this.renderMessages(this.state.messages)}
        <input type="text"/> 
        </div>
      </div>
    )
  }
}

export default Chatbot;