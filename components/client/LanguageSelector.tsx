"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const LanguageSelector = ({ className }: { className?: string }) => {
  const [language, setLanguage] = useState("English");
  const [languages] = useState([
    {
      id: 0,
      type: "English",
    },
    {
      id: 1,
      type: "Belarussian",
    },
    {
      id: 2,
      type: "Russian",
    },
  ]);
  return (
    <Menu placement="bottom">
      <MenuHandler >
        <Button className="bg-gray-800 mr-3 w-36">{language}</Button>
      </MenuHandler>
      <MenuList className=" bg-gray-200 w-36 space-y-4 p-2">
        {
          languages.map((lang) => lang.type === language ? undefined : <MenuItem className="text-left px-5 py-3 bg-lime-600" key={lang.id} onClick={() => (setLanguage(lang.type))}>{lang.type}</MenuItem>)
        }
      </MenuList>
    </Menu>



  );
};

export default LanguageSelector;
