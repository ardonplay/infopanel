"use client";
import { Button, Dropdown } from "flowbite-react";
import React, { useState } from "react";


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
    <div className="mr-3">
      <Dropdown label={language} color={"gray"} t>
        {languages.map((language) => (
          <Dropdown.Item key={language.id} onClick={() => setLanguage(language.type)}>{language.type}</Dropdown.Item>
        ))}
      </Dropdown>
    </div>

  );
};

export default LanguageSelector;
