import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); //super(props) is used to pass props to the parent constructor.

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
      },
    };
    //console.log(this.props.name + "child constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + "child componenet did mount");
    //API calls
    const data = await fetch("https://api.github.com/users/luckysharda");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    //console.log(json);
  }
  componentDidUpdate() {
    //console.log("Component Did Update");
  }
  componentWillUnmount() {
    //console.log("component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>email:luckysharda1011@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
