import React from "react";
import './QuickReply.module.css'; 

const QuickReply = props => {
  if (props.reply.structValue.fields.payload) {
    return (
      <a id="#recButton"
        href="/"
        className="btn-floating btn-large waves-effect waves-light green recButton"
        onClick={event =>
          props.click(
            event,
            props.reply.structValue.fields.payload.stringValue,
            props.reply.structValue.fields.text.stringValue
          )
        }
      >
        {props.reply.structValue.fields.text.stringValue}
      </a>
    );
  } else {
    return (
      <a
        href={props.reply.structValue.fields.link.stringValue}
        className="btn-floating btn-large waves-effect waves-light green .recButton"
      >
        {props.reply.structValue.fields.text.stringValue}
      </a>
    );
  }
};

export default QuickReply;
