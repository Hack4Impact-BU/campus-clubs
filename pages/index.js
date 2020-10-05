import { getSession } from 'next-auth/client';
import { withRouter } from 'next/router';
import React from "react";

class Home extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    const session = await getSession();
    session ? this.props.router.push("/dashboard") : this.props.router.push("/landing")
  }

  render() {
    return (null)
  }

}

export default withRouter(Home)