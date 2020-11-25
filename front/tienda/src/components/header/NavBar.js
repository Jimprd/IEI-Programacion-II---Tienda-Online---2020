import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MenuExampleStackable extends Component {

    render() {
        return (
            <>
                <nav>
                    <div className="ui primary inverted menu orange stackable">
                        <Link className="active item" to="/">Home</Link>
                        <Link className="item" to="/productos">Productos</Link>
                        <Link className="item" to="#">Contáctanos</Link>
                        <Link className="item" to="/registrate">Registrate</Link>
                        <div className="right menu">
                            <div className="item">
                                <div className="ui icon input">
                                    <input type="text" placeholder="Buscar..."></input>
                                    <i className="search link icon"></i>
                                </div>
                            </div>
                            <Link className="ui item" to="/login">Login</Link>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}