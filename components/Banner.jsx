import Image from "next/image";
import relaunchImg from "../assets/images/relaunch.svg";

function Banner() {
  return (
    <section className="w-full h-96 relative grid place-items-center">
      <Image
        src={relaunchImg}
        alt="Launch"
        layout="fill"
        className="pointer-events-none select-none aspect-square"
        priority
      />
    </section>
  );
}

export default Banner;
