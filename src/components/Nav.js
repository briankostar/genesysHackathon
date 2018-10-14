import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Modules
                    </a>
                    <div className="navbar-dropdown">
                        <Link to="/statistics" className="navbar-item">
                            Statistics
                        </Link>
                        <Link to="/funny" className="navbar-item">
                            Funny
                        </Link>
                        <Link to="/incentives" className="navbar-item">
                            Incentives
                        </Link>
                        <Link to="/tips" className="navbar-item">
                            Tips
                        </Link>
                        <Link to="/guide" className="navbar-item">
                            Protocol Guide
                        </Link>
                        <Link to="/transcript" className="navbar-item">
                            Live Transcript
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export { Nav };