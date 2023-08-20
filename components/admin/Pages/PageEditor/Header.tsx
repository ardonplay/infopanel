import { page } from "@/Interfaces/PageInterfaces";
import PageTypeSelector from "./PageTypeSelector";
import { PageEditorActions } from ".";
import { Dispatch } from "react";

const Header = ({data, dispatch} : {data: page, dispatch: Dispatch<PageEditorActions>}) => {
  return (
    <header className="w-full">
      <nav className="text-[#fff] flex justify-end space-x-1 mt-3">
          <PageTypeSelector data={data} dispatch={dispatch}/>
      </nav>
    </header>
  );
};

export default Header;
