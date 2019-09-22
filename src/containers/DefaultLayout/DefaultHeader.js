import React, { Component } from 'react';
// import Web3 from 'web3';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import DefaultHeaderDropdown  from './DefaultHeaderDropdown'
// import logo from '../../assets/img/brand/logo.svg'
import logo from '../../assets/img/brand/Cirrus backup.png'
// import logo from '../../assets/img/brand/1F6BF.svg'
import dropLogo from '../../assets/img/brand/1F4A7.svg'
// import sygnet from '../../assets/img/brand/sygnet.svg'

// import abi from '../../assets/Kame.json'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  // state = {
  //   balance: 0
  // }
  // async componentDidMount() {
  //   var web3 = new Web3(window.web3.currentProvider);
  //   console.log(web3);
  //   console.log(web3.eth.accounts);
  //   console.log(web3.eth.accounts.currentProvider);
  //   var contract = new web3.eth.Contract(abi.abi, abi.networks[1337].address)
  //   var balance = await contract.methods
  //     .balanceOf('0x0810A0E7A850d0eC9a3A1738D35613F52B9399b0')
  //     .call()
  //   this.setState({ balance })
  // }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 52, alt: 'CoreUI Logo', children: "<div>Cirrus</div>" }}
          minimized={{ src: logo, width: 89, height: 52, alt: 'CoreUI Logo' }}
        />
        {/* <div style={{ display: 'inline-flex', position: 'absolute', left: '52%', fontSize: '1.5em' }}>Cirrus</div> */}
        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >My Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/leaderboard" className="nav-link">Leaderboard</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <DefaultHeaderDropdown drops/>
          {/* <DefaultHeaderDropdown notif/>
          <DefaultHeaderDropdown tasks/>
          <DefaultHeaderDropdown mssgs/>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem> */}
          <DefaultHeaderDropdown onLogout={this.props.onLogout} accnt/>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
