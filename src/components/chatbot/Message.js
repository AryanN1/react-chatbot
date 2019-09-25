import React from 'react';

const Message = (props) => {
    return (
        <div className="col s12 m8 offset-m2 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                {props.speaks === 'Bot' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>
                    </div>
                    }
                    <div className="col s10">
                    <span className="black-text">
                        {props.text}
                    </span>
                    </div>
                    {props.speaks=== 'User' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-large waves-effect waves-light blue">{props.speaks}</a>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Message;