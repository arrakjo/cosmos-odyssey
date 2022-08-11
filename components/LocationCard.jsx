import Image from "next/image";
import Earth from "../assets/images/planets/earth.png";

function LocationCard({ name, src, neighbor, distance, description }) {
  return (
    <div className="w-full flex flex-col gap-5 rounded-md bg-grey py-10 px-3 md:px-10 shadow-md">
      <div className="w-full h-auto px-10 flex flex-wrap gap-5 justify-between items-center">
        <Image
          src={src}
          alt={name}
          width={150}
          height={150}
          className="pointer-events-none select-none aspect-square"
        />
        <h3 className="text-4xl md:text-5xl">{name}</h3>
      </div>

      <div className="w-full px-10 pt-5 space-y-1">
        <p className="text-base text-lightgrey font-semibold">
          Closest neighbor(s):{" "}
          <span className="ml-1 font-normal">{neighbor}</span>
        </p>
        <p className="text-base text-lightgrey font-semibold">
          Distance from Earth:{" "}
          <span className="ml-1 font-normal">{distance}</span>
        </p>
        <p className="text-base text-lightgrey pt-4 font-semibold">
          About the planet:{" "}
          <span className="ml-1 font-normal">
            <br />
            {description}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LocationCard;
