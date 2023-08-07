import PageTypeSelector from "./PageTypeSelector";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="text-[#fff] flex justify-end space-x-1 mt-3">
          <PageTypeSelector/>
      </nav>
    </header>
  );
};

export default Header;
