import React from "react";
import { Link } from "react-router-dom";
// import Menu from "./Menu";

export default function Login() {
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui orange center aligned header">Ingresá a tu cuenta</h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail address"
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <div className="ui fluid large orange submit button">Login</div>
          </div>

          <div className="ui error message"></div>
        </form>
        <div className="ui message">
          Aún no tenés una cuenta? <Link to="#">Registrate !</Link>
        </div>
      </div>
    </div>
  );
}
