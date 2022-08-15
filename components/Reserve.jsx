import { useEffect, useState } from "react";
import axios from "axios";
import pinIcon from "../assets/images/pin.svg";
import flagIcon from "../assets/images/flag.svg";
import Image from "next/image";
import ReserveCard from "./ReserveCard";

function Reserve() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [origin, setOrigin] = useState("earth");
  const [destination, setDestination] = useState("mars");
  const [loadedResults, setLoadedResults] = useState(false);

  const expiryDate = new Date(data.validUntil);
  const [expires, setExpires] = useState("--:--");

  const handleExpiry = () => {
    const hoursAndMinutes =
      expiryDate.getHours() + ":" + expiryDate.getMinutes();
    setExpires(`Today, ${hoursAndMinutes}`);
  };

  useEffect(() => {
    axios
      .get(`https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices`)
      .then((res) => {
        const data = res.data;
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error(err);
      });
  }, []);

  const handleOrigin = (e) => {
    e.preventDefault();
    setOrigin(e.target.value);
  };
  const handleDestination = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
  };

  const handleReserveSubmit = (e) => {
    e.preventDefault();
    console.log(origin, destination);
    handleExpiry();
    handleResults();
  };

  // Split first letter from word and uppercase
  const splitFirstLetter = (word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  };

  let chosenOrigin = splitFirstLetter(origin);
  let chosenDestination = splitFirstLetter(destination);

  const handleResults = () => {
    setLoadedResults(true);
    setTimeout(() => {
      document.getElementById("results").scrollIntoView({
        behavior: "smooth",
      });
    }, 125);
  };

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
        <form className="flex flex-col gap-10" onSubmit={handleReserveSubmit}>
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-1">
              <label htmlFor="origin" className="label">
                <Image src={pinIcon} alt="Origin" width={24} height={24} />
                Origin
              </label>
              <select
                name="origin"
                id="origin"
                className="select"
                value={origin}
                onChange={handleOrigin}
              >
                <option value="mercury">Mercury</option>
                <option value="venus">Venus</option>
                <option value="earth">Earth</option>
                <option value="mars">Mars</option>
                <option value="jupiter">Jupiter</option>
                <option value="saturn">Saturn</option>
                <option value="uranus">Uranus</option>
                <option value="neptune">Neptune</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="destination" className="label">
                <Image src={flagIcon} alt="Origin" width={24} height={24} />
                Destination
              </label>
              <select
                name="destination"
                id="destination"
                className="select-alt"
                value={destination}
                onChange={handleDestination}
              >
                <option value="mercury">Mercury</option>
                <option value="venus">Venus</option>
                <option value="earth">Earth</option>
                <option value="mars">Mars</option>
                <option value="jupiter">Jupiter</option>
                <option value="saturn">Saturn</option>
                <option value="uranus">Uranus</option>
                <option value="neptune">Neptune</option>
              </select>
            </div>
          </div>

          <button className="btn--sm max-w-[250px]">Search options</button>
        </form>
      </div>

      <div id="results"></div>

      {loadedResults ? (
        <div className="flex flex-col gap-10">
          <div className="w-full flex flex-wrap justify-between gap-3 pt-5">
            <p>
              Deals valid until:{" "}
              <span className="font-semibold">{expires}</span>
            </p>
            <p className="italic">Pricelist: {data.id}</p>
          </div>

          <div className="space-y-2">
            <p className="text-3xl">Showing current deals for route:</p>
            <p className="text-2xl">
              From{" "}
              <span className="text-lightblue font-semibold">
                {chosenOrigin}
              </span>{" "}
              to{" "}
              <span className="text-rose font-semibold">
                {chosenDestination}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ReserveCard
              origin={chosenOrigin}
              destination={chosenDestination}
            />
            <ReserveCard
              origin={chosenOrigin}
              destination={chosenDestination}
            />
            <ReserveCard
              origin={chosenOrigin}
              destination={chosenDestination}
            />
            <ReserveCard
              origin={chosenOrigin}
              destination={chosenDestination}
            />
            <ReserveCard
              origin={chosenOrigin}
              destination={chosenDestination}
            />
            <ReserveCard
              origin={chosenOrigin}
              destination={chosenDestination}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Reserve;
