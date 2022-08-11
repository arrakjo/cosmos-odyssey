import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-wrap justify-between w-full pb-6 pt-8 border-t border-grey text-base text-lightgrey">
      <p>&copy; 2022 Joosep Arrak</p>
      <Link href="https://www.arrak.dev" alt="Visit Joosep Arrak's website">
        <a target="_blank">Visit my portfolio</a>
      </Link>
    </footer>
  );
}

export default Footer;
