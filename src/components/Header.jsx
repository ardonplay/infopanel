'use client'
import { Dropdown } from 'flowbite-react';

const Header = () => {
  return (
    <header className="flex-initial w-full">
      <nav className="text-[#fff] flex justify-end space-x-1 mt-3">
      <Dropdown
      label="Dropdown button"
    >
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
      </nav>
    </header>
  );
};

export default Header;
