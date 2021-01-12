import React from "react";
import PropTypes from "prop-types";
const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign into manage stores Inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In With GitHub
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In With Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
export default Login;
