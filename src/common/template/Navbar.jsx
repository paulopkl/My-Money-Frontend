import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../auth/authActions';

class Navbar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li className={`dropdown user user-menu ${this.state.open ? 'open' : ''}`} 
                        onMouseLeave={() => this.changeOpen()}>
                            <a href="javascript:;" onClick={() => this.changeOpen()} data-toggle="dropdown"
                                className="dropdown-toggle" aria-expanded={this.state.open ? 'true' : 'false'}>
                                    <img src="http://lorempixel.com/160/160/abstract" alt="User Image" 
                                        className="user-image" />
                                    <span className="hidden-xs">{this.props.user.name}</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img src="http://lorempixel.com/160/160/abstract" 
                                        className="img-circle" alt="User Image" />
                                    <p>{this.props.user.name}<small>{this.props.user.email}</small></p>
                                </li>
                                <li className="user-footer">
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-default btn-flat"
                                            onClick={this.props.logout}>Sair</a>
                                    </div>
                                </li>
                            </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.auth.user, validToken: state.auth.validToken }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ logout }, dispatch);
}

const navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default navbar;