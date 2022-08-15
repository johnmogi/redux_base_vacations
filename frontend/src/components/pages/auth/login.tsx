import * as React from "react";
import { Component, SyntheticEvent } from "react";
import { UserLog } from "../../models/user-model";
// import { Redirect } from "react-router-dom";

const PORT = process.env.PORT || 3011;

interface LoginState {
  userInfo: UserLog[];
  logUser: UserLog;
  user: {
    userName: String;
    password: String;
  };
}

export class SignIn extends Component<any, LoginState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      userInfo: [],
      logUser: new UserLog(),
      user: {
        userName: "",
        password: ""
      }
    };
  }
  private setUserName = (args: SyntheticEvent) => {
    const userName = (args.target as HTMLInputElement).value;
    const user = { ...this.state.user };
    user.userName = userName;
    this.setState({ user });
  };
  private setUserPassword = (args: SyntheticEvent) => {
    const password = (args.target as HTMLInputElement).value;
    const user = { ...this.state.user };
    user.password = password;
    this.setState({ user });
  };

  private logUser = () => {
    if (this.state.user.password === "" || this.state.user.userName === "") {
      return alert("check form fields again please");
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // What type we are sending (MIME Types)
        Accept: "application/json" // What type we are expecting to get back (MIME Types)
      },
      body: JSON.stringify(this.state.user)
    };

    fetch(`http://localhost:${PORT}/api/auth/login`, options)
      .then(async response => {
        if (!response.ok) throw new Error(await response.text());
        return response;
      })
      .then(response => response.json())
      .then(userInfo => this.setState({ userInfo }))
      // .then(logUser => this.setState({ logUser }))
      .catch(err => console.log(err.message));
  };
  public loggedIn = () => {
    console.log("user is now logged in");
  };

  render() {
    // **this redirect is hot**
    // if (this.state.logUser.isLogged === true) {
    //   return <Redirect to="/" />;
    // }
    return (
      <div className="signin">
        <form>
          <input type="text" placeholder="Name..." onBlur={this.setUserName} />
          <br /> <br />
          <input
            type="text"
            placeholder="Password..."
            onChange={this.setUserPassword}
          />
          <br /> <br />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.logUser}
          >
            Log me in, Scottie!
          </button>
        </form>
        logged in : {this.state.userInfo}
      </div>
    );
  }
}
