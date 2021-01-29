import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  right: 0;
  top: 0;
  
  
 height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  
`;

export const NavLink = styled(Link)`
  
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: Raleway;
    line-height: 25px;
    font-weight: 400;
    font-style: normal;
    color: #4d595a;
    font-size: 14px;
  &.active {
    color: #15cdfc;
    text-decoration: underline;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  top: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

