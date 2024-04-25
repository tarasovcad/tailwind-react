import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { NavItem } from '../nav-item';

export const Header = () => {
  return (
    <header className="flex">
      <LogoIcon />
      <nav className="flex space-x-2 ml-8 items-center">
        <NavItem text="Features">sadasd</NavItem>
        <NavItem text="Company" />
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
    </header>
  );
};
