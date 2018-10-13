import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Modules
            </a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            Statistics
              </a>
                        <a className="navbar-item">
                            Funny
              </a>
                        <a className="navbar-item">
                            Incentives
              </a>
                        <a className="navbar-item">
                            Tips
              </a>
                        <a className="navbar-item">
                            Protocol Guide
              </a>
                        <a className="navbar-item">
                            Live Transcript
              </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export { Nav };