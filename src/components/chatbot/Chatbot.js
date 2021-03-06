import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios/index";
import Message from "./Message";
import Cookies from "universal-cookie";
import { v4 as uuid } from "uuid";
import Card from "./Card";
import QuickReplies from "./QuickReplies";
import styles from "./Chatbot.module.css";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://warm-basin-86893.herokuapp.com"
    : "https://warm-basin-86893.herokuapp.com";

const cookies = new Cookies();

class Chatbot extends Component {
  messagesEnd;
  talkInput;

  constructor(props) {
    super(props);
    // Binding needed to make `this` work
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    //Setting State of Chatbot in the Shop section
    this.state = {
      messages: [],
      showBot: false,
      shopWelcomeSent: false
    };

    if (cookies.get("userID") === undefined) {
      cookies.set("userID", uuid(), { path: "/" });
    }
  }
  // Query the Text Input
  async df_text_query(text) {
    let says = {
      speaks: "User",
      msg: {
        text: {
          text: text
        }
      }
    };
    this.setState({ messages: [...this.state.messages, says] });

    try {
      const res = await axios.post(`${baseURL}/api/df_text_query`, {
        text: text,
        userID: cookies.get("userID")
      });
      // eslint-disable-next-line
      for (let msg of res.data.fulfillmentMessages) {
        says = {
          speaks: "Bot",
          msg: msg
        };
        this.setState({ messages: [...this.state.messages, says] });
      }
    } catch (e) {
      says = {
        speaks: "Bot",
        msg: {
          text: {
            text: "Server is down, Bye Felicia!"
          }
        }
      };
      this.setState({ messages: [...this.state.messages, says] });
      let that = this;
      setTimeout(function() {
        that.setState({ showBot: false });
      }, 3000);
    }
  }
  // Query the Event Input
  async df_event_query(event) {
    try {
      const res = await axios.post(`${baseURL}/api/df_event_query`, {
        event: event,
        userID: cookies.get("userID")
      }); // eslint-disable-next-line
      for (let msg of res.data.fulfillmentMessages) {
        let says = {
          speaks: "Bot",
          msg: msg
        };
        this.setState({ messages: [...this.state.messages, says] });
      }
    } catch (e) {
      let says = {
        speaks: "Bot",
        msg: {
          text: {
            text:
              "I'm going to make like a banana and split. I'll be back, later, maybe?"
          }
        }
      };
      this.setState({ messages: [...this.state.messages, says] });
      let that = this;
      setTimeout(function() {
        that.setState({ showBot: false });
      }, 3000);
    }
  }
  // All functions here
  resolveAfterXseconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, x * 2000);
    });
  }

  show(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ showBot: true });
  }

  hide(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ showBot: false });
  }

  renderMessages(stateMessages) {
    if (stateMessages) {
      return stateMessages.map((message, i) => {
        return this.renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    if (this.talkInput) {
      this.talkInput.focus();
    }
  }

  renderCards(cards) {
    return cards.map((card, i) => <Card key={i} payload={card.structValue} />);
  }

  _handleQuickReplyPayload(event, payload, text) {
    event.preventDefault();
    event.stopPropagation();
    switch (payload) {
      case "recommend_yes":
        this.df_event_query("SHOW_RECOMMENDATIONS");
        break;
      case "training_masterclass":
        this.df_event_query("MASTERCLASS");
        break;
      default:
        this.df_text_query(text);
        break;
    }
  }

  _handleInputKeyPress(e) {
    if (e.key === "Enter") {
      this.df_text_query(e.target.value);
      e.target.value = "";
    }
  }

  renderOneMessage(message, i) {
    if (message.msg && message.msg.text && message.msg.text.text) {
      return (
        <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
      );
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.fields &&
      message.msg.payload.fields.cards
    ) {
      return (
        <div key={i}>
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className={styles.hidden}>
              <div className="col s2">
                <div
                  href="/"
                  className="btn-floating btn-large waves-effect waves-light red"
                >
                  {message.speaks}
                </div>
              </div>
              <div className={styles.overflow}>
                <div
                  style={{
                    height: 300,
                    width:
                      message.msg.payload.fields.cards.listValue.values.length *
                      270
                  }}
                >
                  {this.renderCards(
                    message.msg.payload.fields.cards.listValue.values
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.fields &&
      message.msg.payload.fields.quick_replies
    ) {
      return (
        <QuickReplies
          text={
            message.msg.payload.fields.text
              ? message.msg.payload.fields.text
              : null
          }
          key={i}
          replyClick={this._handleQuickReplyPayload}
          speaks={message.speaks}
          payload={message.msg.payload.fields.quick_replies.listValue.values}
        />
      );
    }
  }
  //Component Mounting
  async componentDidMount() {
    this.df_event_query("Welcome");
    if (window.location.pathname === "/shop" && !this.shopWelcomeSent) {
      await this.resolveAfterXseconds(1);
      this.df_event_query("WELCOME_SHOP");
      this.setState({ shopWelcomeSent: true, showBot: true });
    }
    this.props.history.listen(() => {
      if (
        this.props.history.location.pathname === "/shop" &&
        !this.state.shopWelcomeSent
      ) {
        this.df_event_query("WELCOME_SHOP");
        this.setState({ shopWelcomeSent: true, showBot: true });
      }
    });
  }
  render() {
    if (this.state.showBot) {
      return (
        <div className={styles.showBot}>
          <nav>
            <div className="nav-wrapper blue">
              <div className="brand-logo">Chatbot</div>
              <ul id="nav-mobile" className="right">
                <li>
                  <a href="/" onClick={this.hide}>
                    Hide
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div id="chatbot" className={styles.hideBot}>
            {this.renderMessages(this.state.messages)}
            <div
              className={styles.el}
              ref={el => {
                this.messagesEnd = el;
              }}
            ></div>
          </div>
          <div className="col s12 m12 l12">
            <input
              className={styles.inputText}
              ref={input => {
                this.talkInput = input;
              }}
              placeholder="Type a message:"
              onKeyPress={this._handleInputKeyPress}
              id="user_says"
              type="text"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.maxStyle}>
          <nav className={styles.navWrapper}>
            <div className="nav-wrapper">
              <div className="brand-logo">Chatbot</div>
              <ul id="nav-mobile" className="right">
                <li>
                  <a href="/" onClick={this.show}>
                    Show
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className={styles.el}
            ref={el => {
              this.messagesEnd = el;
            }}
          ></div>
        </div>
      );
    }
  }
}
export default withRouter(Chatbot);
