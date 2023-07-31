import LanguageSelector from "./LanguageSelector";


const Header = () => {
  return (
    <header className="flex-initial w-full">
      <nav className="text-[#fff] flex justify-end space-x-1 mt-3">
          <LanguageSelector className=" bg-yellow-200"/>
      </nav>
    </header>
  );
};

export default Header;
