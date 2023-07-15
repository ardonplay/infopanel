import {
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import "../../node_modules/flag-icon-css/css/flag-icons.min.css";

import { NextPage } from "next";

export interface LanguageSelectorProps {

  className?: string;
}

const LanguageSelector: NextPage<LanguageSelectorProps> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <MenuHandler>
        <span className="flag-icon flag-icon-us flag-icon-squared text-3xl rounded-2xl" />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2 text-lg">
          <span className="flag-icon flag-icon-us"></span>English
        </MenuItem>
        <MenuItem className="flex items-center gap-2 text-lg">
          <span className="flag-icon flag-icon-by"></span>Belarussian
        </MenuItem>
        <MenuItem className="flex items-center gap-2 text-lg">
          <span className="flag-icon flag-icon-ru"></span>Russian
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default LanguageSelector;