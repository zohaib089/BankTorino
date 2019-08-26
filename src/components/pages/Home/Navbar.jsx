import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class NavbarLayOut extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/" style={{ fontSize: "45px", color: "White" }}>BankTorino</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={{ color: "white" }} href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: "white" }} href="/register">Signup</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{ color: "white" }} nav caret>
                                    Personal
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Cards
                  </DropdownItem>
                                    <DropdownItem>
                                        Notifications
                  </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Benefits
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}