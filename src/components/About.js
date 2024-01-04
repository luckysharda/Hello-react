import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("parent constructor");
  }
  componentDidMount() {
    //componenet didmount is used to make API calls
    //console.log("parent componenet did mount");
  }
  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About Class component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is swiggy clone</h2>
        {/* <User name={"Lucky sharda (function)"} /> */}
        <UserClass name={"First"} location={"kota class"} />
      </div>
    );
  }
}

export default About;
