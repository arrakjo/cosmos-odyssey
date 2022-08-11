import Select from "react-select";
import pinIcon from "../assets/images/pin.svg";
import flagIcon from "../assets/images/flag.svg";
import Image from "next/image";

const originOptions = [
  { value: "mercury", label: "Mercury" },
  { value: "venus", label: "Venus" },
  { value: "earth", label: "Earth" },
  { value: "mars", label: "Mars" },
  { value: "jupiter", label: "Jupiter" },
  { value: "saturn", label: "Saturn" },
  { value: "uranus", label: "Uranus" },
  { value: "neptune", label: "Neptune" },
];

const destinationOptions = [
  { value: "mercury", label: "Mercury" },
  { value: "venus", label: "Venus" },
  { value: "earth", label: "Earth" },
  { value: "mars", label: "Mars" },
  { value: "jupiter", label: "Jupiter" },
  { value: "saturn", label: "Saturn" },
  { value: "uranus", label: "Uranus" },
  { value: "neptune", label: "Neptune" },
];

function Reserve() {
  return (
    <section id="reserve" className="flex flex-col gap-8 pt-8 pb-8 w-full">
      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-3xl text-white">
          Start your <span className="text-lightblue">exploration</span>
        </h2>
        <p className="text-base text-lightgrey">
          Choose your desired origin and destination to view our offers.
        </p>
      </div>

      <div className="flex flex-col">
        <form className="flex flex-wrap gap-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="origin" className="label">
              <Image src={pinIcon} alt="Origin" width={24} height={24} />
              Origin
            </label>
            <Select
              defaultValue={originOptions[2]}
              options={originOptions}
              className="w-72 text-black text-xl"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: "#DBDCE1",
                  primary: "#81D0F9",
                },
              })}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="destination" className="label">
              <Image src={flagIcon} alt="Origin" width={24} height={24} />
              Destination
            </label>
            <Select
              defaultValue={destinationOptions[3]}
              options={destinationOptions}
              className="w-72 text-black text-xl"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: "#DBDCE1",
                  primary: "#F9C4BE",
                },
              })}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reserve;
