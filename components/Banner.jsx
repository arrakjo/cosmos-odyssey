import Image from "next/image";
import relaunchImg from "../assets/images/relaunch.svg";

function Banner() {
  return (
    <section className="w-full h-96 flex flex-col gap-3 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg">
          Couldn&apos;t find what you&apos;re looking for?
        </p>
        <p>Feel free to search for other options.</p>
      </div>
      <Image
        src={relaunchImg}
        alt="Launch"
        width={384}
        height={384}
        className="pointer-events-none select-none aspect-square"
        priority
      />
    </section>
  );
}

export default Banner;
