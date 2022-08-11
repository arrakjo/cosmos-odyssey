import burgerIcon from "../assets/images/burger.svg";
import xIcon from "../assets/images/xicon.svg";
import Link from "next/link";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  return (
    <header className="flex w-full pb-5 pt-6 justify-between items-center">
      <Link href="/">
        <a className="text-3xl lg:text-4xl border-b duration-150 ease-in-out border-black lg:hover:border-rose">
          Cosmos Odyssey
        </a>
      </Link>

      <div className="block md:hidden">
        <button
          onClick={handleMenu}
          className="grid place-items-center p-2 w-10 h-10"
        >
          <Image
            src={burgerIcon}
            alt="Menu"
            aria-label="Open menu"
            className="w-full"
            priority
          />
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="/locations">
          <a className="text-xl border-b duration-150 ease-in-out border-black hover:border-lightblue">
            Locations
          </a>
        </Link>

        <ButtonLink name="Reserve" link="/#reserve" style="btn--sm" />
      </div>

      {menu && (
        <div className="fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-95 z-10">
          <div className="w-full flex flex-col justify-center items-end pb-5 pt-10 px-4">
            <button
              onClick={handleMenu}
              className="grid place-items-center p-2 w-10 h-10"
            >
              <Image
                src={xIcon}
                alt="Menu"
                aria-label="Open menu"
                className="w-full"
                priority
              />
            </button>

            <div className="absolute bottom-20 left-0 right-0 flex flex-col justify-center items-center gap-14 opacity-100 z-20">
              <Link href="/locations">
                <a className="text-3xl border-b duration-150 ease-in-out border-black hover:border-lightblue">
                  Locations
                </a>
              </Link>

              <ButtonLink name="Reserve" link="/#reserve" style="btn--sm" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
