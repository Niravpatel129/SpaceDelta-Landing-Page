import React from "react";
import Particles from "react-particles-js";
import "./index.scss";
import Head from "next/head";
import classnames from "classnames";

import { CopyToClipboard } from "react-copy-to-clipboard";

import Axios from "axios";
var playerCount;
class Index extends React.Component {
  static getInitialProps() {
    return {};
  }
  constructor() {
    super();
    this.state = {
      playersOnline: 0,
      pageLoaded: "notLoaded",
      ringsLoad: "ringsLoaded"
    };
  }
  componentDidMount() {
    Axios.get("https://api.mcsrvstat.us/2/play.spacedelta.net").then(res => {
      console.log(res.data.players.online);
      playerCount = res.data.players.online;
      console.log(playerCount);
      this.setState({ playersOnline: playerCount });
    });
  }
  componentWillUnmount() {}
  componentDidUpdate() {}

  copytoClipboard() {
    console.log("hello i clicked");
  }
  render() {
    return (
      <React.Fragment>
        <Particles
          params={{
            particles: {
              number: {
                value: 300,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              line_linked: {
                enable: true,
                opacity: 0.001,
                value: 1
              },
              move: {
                direction: "right",
                speed: 0.05
              },
              size: {
                value: 1
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05
                }
              }
            },
            interactivity: {
              enable: true,
              events: {
                onhover: {
                  enable: true
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                push: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          }}
        />
        <div className={classnames("lds-ring", this.state.ringsLoad)}>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={this.state.pageLoaded}>
          <Head>
            <title>Space Delta</title>
            <link
              rel="shortcut icon"
              type="image/x-icon"
              href="/static/icon.ico"
            />
          </Head>

          <img
            onLoad={() => {
              console.log("page loaded");
              this.setState({
                pageLoaded: "Loaded",
                ringsLoad: "ringsNotLoaded"
              });
            }}
            className="banner"
            src="../static/logo.png"
            width="510px"
          />
          <img className="zombie" src="../static/Dude.png" width="800" />
          <h2 className="online">
            Players Online: {this.state.playersOnline || playerCount || ""}
          </h2>
          <h2
            onMouseEnter={() => console.log("mouse hovering over ip")}
            onClick={() => this.copytoClipboard()}
            onMouseLeave={() => console.log("mouse hovering over ip")}
            className="ip"
          >
            <p className="clicktocopy">Click to Copy</p>
            <CopyToClipboard text={"play.spacedelta.net"}>
              <a>IP: play.spacedelta.net</a>
            </CopyToClipboard>
          </h2>
          <div className="floattest">
            <a href="/">
              <img
                className="one icon grow"
                src="../static/Mercury.png"
                width=""
              />
            </a>
            <a href="/">
              <img className="two icon" src="../static/Venus.png" width="" />
            </a>
            <a href="/">
              <img
                className="three icon"
                src="../static/Earth.png"
                width="710px"
              />
            </a>
            <a href="/">
              <img className="four icon" src="../static/Mars.png" width="" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
