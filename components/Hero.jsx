import Image from "next/image";
import spaceImg from "../assets/images/space.jpg";
import ButtonLink from "./ButtonLink";

function Hero() {
  return (
    <div className="w-full h-80 md:h-full md:max-h-[640px] relative rounded-lg aspect-square md:aspect-video shadow-md">
      <Image
        src={spaceImg}
        alt="Photo by Bryan Goff on Unsplash"
        layout="fill"
        priority
        objectFit="cover"
        className="rounded-2xl z-0 pointer-events-none select-none aspect-square md:aspect-video"
      />

      <div className="absolute flex flex-col gap-3 bottom-5 md:bottom-12 left-5 md:left-10 justify-center items-start">
        <h1 className="text-4xl lg:text-5xl max-w-xs lg:max-w-sm">
          Solar System Travel Deals
        </h1>
        <ButtonLink name="Explore" link="/#reserve" style="btn--secondary" />
      </div>
    </div>
  );
}

export default Hero;
