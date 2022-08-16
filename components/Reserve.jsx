import { useEffect, useState } from "react";
import axios from "axios";
import pinIcon from "../assets/images/pin.svg";
import flagIcon from "../assets/images/flag.svg";
import upIcon from "../assets/images/up.svg";
import downIcon from "../assets/images/down.svg";
import Image from "next/image";
import ReserveCard from "./ReserveCard";

const locations = [
  {
    id: 1,
    name: "Mercury",
  },
  {
    id: 2,
    name: "Venus",
  },
  {
    id: 3,
    name: "Earth",
  },
  {
    id: 4,
    name: "Mars",
  },
  {
    id: 5,
    name: "Jupiter",
  },
  {
    id: 6,
    name: "Saturn",
  },
  {
    id: 7,
    name: "Uranus",
  },
  {
    id: 8,
    name: "Neptune",
  },
];

const dummyData = [
  {
    id: 1,
    provider: "SpaceX",
    price: 42069.0,
    duration: "5 days",
    distance: 26265158,
    flightStart: "Today, 11:29",
    flightEnd: "Tomorrow, 23:59",
    from: "Earth",
    to: "Mars",
  },
  {
    id: 2,
    provider: "Coolio",
    price: 12345.0,
    duration: "1 day",
    distance: 26158,
    flightStart: "Today, 11:29",
    flightEnd: "Tomorrow, 23:59",
    from: "Earth",
    to: "Neptune",
  },
  {
    id: 3,
    provider: "Space R Us",
    price: 68095.0,
    duration: "6 days",
    distance: 382158,
    flightStart: "Today, 11:29",
    flightEnd: "Tomorrow, 23:59",
    from: "Venus",
    to: "Mars",
  },
  {
    id: 4,
    provider: "SpaceXpress",
    price: 69420.0,
    duration: "2 days",
    distance: 143,
    flightStart: "Today, 11:29",
    flightEnd: "Tomorrow, 23:59",
    from: "Neptune",
    to: "Earth",
  },
  {
    id: 5,
    provider: "Coolio",
    price: 99999.0,
    duration: "7 days",
    distance: 65265158,
    flightStart: "Today, 11:29",
    flightEnd: "Tomorrow, 23:59",
    from: "Earth",
    to: "Mars",
  },
];

function Reserve() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [origin, setOrigin] = useState("Earth");
  const [destination, setDestination] = useState("Mars");
  const [loadedResults, setLoadedResults] = useState(false);
  const [hasResults, setHasResults] = useState(null);
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState("");

  const expiryDate = new Date(data.validUntil);
  const [expires, setExpires] = useState("--:--");

  // API call to get data when the component mounts
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

  // Handle the pricelist's expiration time && show that time in the UI
  const handleExpiry = () => {
    const hoursAndMinutes =
      expiryDate.getHours() + ":" + expiryDate.getMinutes();
    setExpires(`Today, ${hoursAndMinutes}`);
  };

  // Handle the origin location, which the customer chooses
  const handleOrigin = (e) => {
    e.preventDefault();
    setOrigin(e.target.value);
  };
  // Handle the destination location, which the customer chooses
  const handleDestination = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
  };

  // Filter the initial search results based on the origin and destination chosen
  const filterInitialResults = (e) => {
    e.preventDefault();
    if (origin === dummyData.from && destination === dummyData.to) {
      setLoadedResults(true);
    } else {
      return null;
    }
  };

  // Handle the Search button, which the customer clicks to search for a travel option (route)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(origin, destination);
    handleExpiry();
    handleResults();
  };

  // Handle the results of the API call, and scroll to the results section after a slight delay
  const handleResults = () => {
    setLoadedResults(true);
    setTimeout(() => {
      document.getElementById("results").scrollIntoView({
        behavior: "smooth",
      });
    }, 125);
  };

  const handleInitialResults = () => {
    dummyData.filter((item) => item.from === origin && item.to === destination);
  };

  // Handle the sorting logic of the results
  const handleSort = (a, b) => {
    if (sort === "priceLoHi") {
      return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
    } else if (sort === "priceHiLo") {
      return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
    } else if (sort === "distanceLoHi") {
      return a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0;
    } else if (sort === "distanceHiLo") {
      return a.distance < b.distance ? 1 : b.distance < a.distance ? -1 : 0;
    } else if (sort === "durationLoHi") {
      return a.duration > b.duration ? 1 : b.duration > a.duration ? -1 : 0;
    } else if (sort === "durationHiLo") {
      return a.duration < b.duration ? 1 : b.duration < a.duration ? -1 : 0;
    } else return null;
  };

  // Filter the results based on the filter input
  const handleFilter = (e) => {
    setFilter(e.target.value);

    if (filter === "spacex") {
      setData(dummyData.filter((item) => item.provider === "SpaceX"));
    } else if (filter === "coolio") {
      setData(dummyData.filter((item) => item.provider === "Coolio"));
    } else if (filter === "spaceRUs") {
      setData(dummyData.filter((item) => item.provider === "Space R Us"));
    } else if (filter === "spaceXpress") {
      setData(dummyData.filter((item) => item.provider === "SpaceXpress"));
    } else if (filter === "all") {
      setData(dummyData);
    } else return null;
  };

  // Start sorting logic
  const sortPriceLowToHigh = (e) => {
    e.preventDefault();
    setSort("priceLoHi");
    const element = document.getElementById("priceLoHi");
    Array.from(document.querySelectorAll(".active")).forEach((el) =>
      el.classList.remove("active")
    );
    element.classList.add("active");
  };
  const sortPriceHighToLow = (e) => {
    e.preventDefault();
    setSort("priceHiLo");
    const element = document.getElementById("priceHiLo");
    Array.from(document.querySelectorAll(".active")).forEach((el) =>
      el.classList.remove("active")
    );
    element.classList.add("active");
  };
  const sortDistanceLowToHigh = (e) => {
    e.preventDefault();
    setSort("distanceLoHi");
    const element = document.getElementById("distanceLoHi");
    Array.from(document.querySelectorAll(".active")).forEach((el) =>
      el.classList.remove("active")
    );
    element.classList.add("active");
  };
  const sortDistanceHighToLow = (e) => {
    e.preventDefault();
    setSort("distanceHiLo");
    const element = document.getElementById("distanceHiLo");
    Array.from(document.querySelectorAll(".active")).forEach((el) =>
      el.classList.remove("active")
    );
    element.classList.add("active");
  };
  const sortDurationLowToHigh = (e) => {
    e.preventDefault();
    setSort("durationLoHi");
    const element = document.getElementById("durationLoHi");
    Array.from(document.querySelectorAll(".active")).forEach((el) =>
      el.classList.remove("active")
    );
    element.classList.add("active");
  };
  const sortDurationHighToLow = (e) => {
    e.preventDefault();
    setSort("durationHiLo");
    const element = document.getElementById("durationHiLo");
    Array.from(document.querySelectorAll(".active")).forEach((el) =>
      el.classList.remove("active")
    );
    element.classList.add("active");
  };
  // End sorting logic

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
        <form className="flex flex-col gap-10" onSubmit={handleSearchSubmit}>
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
                {locations.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
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
                {locations.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
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
              <span className="text-lightblue font-semibold">{origin}</span> to{" "}
              <span className="text-rose font-semibold">{destination}</span>
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-wrap md:flex-row md:items-center gap-2 md:gap-5 border-t border-lightgrey py-3 select-none">
            <p className="text-lg font-semibold">Sort by:</p>

            <div className="flex gap-2 items-center max-w-[180px] justify-between">
              <p>Price:</p>
              <div className="flex gap-1">
                <span
                  id="priceLoHi"
                  onClick={sortPriceLowToHigh}
                  aria-label="Sort Lowest to Highest"
                  className="grid place-items-center cursor-pointer btn--sort"
                >
                  <Image
                    src={upIcon}
                    alt="Lowest to Highest"
                    width={24}
                    height={24}
                  />
                </span>
                <span
                  id="priceHiLo"
                  onClick={sortPriceHighToLow}
                  aria-label="Sort Highest to Lowest"
                  className="grid place-items-center cursor-pointer btn--sort"
                >
                  <Image
                    src={downIcon}
                    alt="Highest to Lowest"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>

            <div className="flex gap-2 items-center max-w-[180px] justify-between">
              <p>Distance:</p>
              <div className="flex gap-1">
                <span
                  id="distanceLoHi"
                  onClick={sortDistanceLowToHigh}
                  aria-label="Sort Lowest to Highest"
                  className="grid place-items-center cursor-pointer btn--sort"
                >
                  <Image
                    src={upIcon}
                    alt="Lowest to Highest"
                    width={24}
                    height={24}
                  />
                </span>
                <span
                  id="distanceHiLo"
                  onClick={sortDistanceHighToLow}
                  aria-label="Sort Highest to Lowest"
                  className="grid place-items-center cursor-pointer btn--sort"
                >
                  <Image
                    src={downIcon}
                    alt="Highest to Lowest"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>

            <div className="flex gap-2 items-center max-w-[180px] justify-between">
              <p>Travel time:</p>
              <div className="flex gap-1">
                <span
                  id="durationLoHi"
                  onClick={sortDurationLowToHigh}
                  aria-label="Sort Lowest to Highest"
                  className="grid place-items-center cursor-pointer btn--sort"
                >
                  <Image
                    src={upIcon}
                    alt="Lowest to Highest"
                    width={24}
                    height={24}
                  />
                </span>
                <span
                  id="durationHiLo"
                  onClick={sortDurationHighToLow}
                  aria-label="Sort Highest to Lowest"
                  className="grid place-items-center cursor-pointer btn--sort"
                >
                  <Image
                    src={downIcon}
                    alt="Highest to Lowest"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-wrap md:flex-row md:items-center gap-2 md:gap-5 border-b border-lightgrey py-3">
              <p className="text-lg font-semibold">Filter by Company:</p>
              <select
                name="filter"
                id="filter"
                className="select-alt text-base h-9 px-3 pt-2 pb-1"
                value={filter}
                onChange={handleFilter}
              >
                <option value="all">Show all</option>
                {dummyData.map((item) => (
                  <option key={item.id} value={item.provider}>
                    {item.provider}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* {dummyData
            .filter((item) => item.from === origin && item.to === destination)
            .map((dummyData) => (
              <li key={dummyData.id}>
                {dummyData.from} - {dummyData.to}
              </li>
            ))} */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {dummyData
              .filter((item) => item.from === origin && item.to === destination)
              .sort(handleSort)
              .map((dummyData) => (
                <ReserveCard
                  key={dummyData.id}
                  origin={dummyData.from}
                  destination={dummyData.to}
                  provider={dummyData.provider}
                  price={dummyData.price}
                  duration={dummyData.duration}
                  distance={dummyData.distance}
                  flightStart={dummyData.flightStart}
                  flightEnd={dummyData.flightEnd}
                />
              ))}
            {/* {hasResults === false ? (
              <p className="text-xl">
                Sorry, no deals found for this route. Please try another
              </p>
            ) : null} */}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Reserve;
