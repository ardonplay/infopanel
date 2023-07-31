import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-cyan-900 rounded-l-lg">
      <div className="flex flex-col justify-end w-[15vw] h-full mx-auto">
        <div className="flex-intial h-1/2">
          <nav className="flex flex-col justify-end h-full items-center">
            <div className="p-10 bg-fuchsia-700 rounded-full">
              <Image src="/logo.png" alt="logo" width={128}
                height={128} className="rounded-xl" />
            </div>
          </nav>
        </div>
        <div className="flex-initial h-1/2">
          <nav className="flex flex-col justify-end text-center h-full">
            <Link href="/settings" className="font-medium  hover:text-blue-600 mb-10 ">
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
