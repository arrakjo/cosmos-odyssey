import burgerIcon from "../assets/images/burger.svg";
import Link from "next/link";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

function Header() {
  return (
    <header className="flex w-full pb-5 pt-6 justify-between items-center">
      <Link href="/">
        <a className="text-3xl lg:text-4xl border-b duration-150 ease-in-out border-black lg:hover:border-rose">
          Cosmos Odyssey
        </a>
      </Link>

      <div className="block md:hidden">
        <button className="grid place-items-center p-2 w-10 h-10">
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
            All locations
          </a>
        </Link>

        <ButtonLink name="Reserve" link="#reserve" style="btn--sm" />
      </div>
    </header>
  );
}

export default Header;
