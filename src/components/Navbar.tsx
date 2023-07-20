import Link from "next/link";
const Navbar = () => {
  return (
    <div className="backdrop-blur-3xl rounded-l-lg">
      <nav className="flex flex-col w-32 m-5">
        <Link href="/profile" className="text-sm font-medium  hover:text-blue-600 md:ml-2">
          Profile
        </Link>
        <Link href="/messagies" className="text-sm font-medium  hover:text-blue-600 md:ml-2">
          Messagies
        </Link>
        <Link href="/news" className=" text-sm font-medium  hover:text-blue-600 md:ml-2">
          News
        </Link>
        <Link href="/users" className=" text-sm font-medium  hover:text-blue-600 md:ml-2">
          Users
        </Link>
        <Link href="/music" className=" text-sm font-medium  hover:text-blue-600 md:ml-2">
          Music
        </Link>
        <Link href="/settings" className="mt-72 text-sm font-medium  hover:text-blue-600 md:ml-2">
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
