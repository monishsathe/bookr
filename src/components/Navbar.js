import React from 'react';
import{ Nav, NavLink, Bars, NavMenu} from "./NavbarStyle";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    return (
        
           <Nav>
               <NavLink to="/">
               <img src="https://bookrclass.com/wp-content/uploads/2019/12/bookr_logo.png" alt="BOOKR Class"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to ="/HOME" activeStyle>
                        HOME
                    </NavLink>
                    <NavLink to ="/THE SOLUTION" activeStyle>
                    THE SOLUTION
                    </NavLink>
                    <NavLink to ="/TITLES" activeStyle>
                    TITLES
                    </NavLink>
                    <NavLink to ="/PRICING" activeStyle>
                    PRICING
                    </NavLink>
                    <NavLink to ="/TEACHER" activeStyle>
                    TEACHER
                    </NavLink>
                    <NavLink to ="/FEATURES" activeStyle>
                    FEATURES
                    </NavLink>
                    <NavLink to ="/BLOG" activeStyle>
                    BLOG
                    </NavLink>
                    <NavLink to ="/FAMILY" activeStyle>
                    FAMILY
                    </NavLink>
                 </NavMenu>
            </Nav>
            
        
    );
};


export default Navbar
