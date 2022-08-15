import LocationCard from "./LocationCard";

import Earth from "../assets/images/planets/earth.png";
import Mars from "../assets/images/planets/mars.png";
import Venus from "../assets/images/planets/venus.png";
import Mercury from "../assets/images/planets/mercury.png";
import Jupiter from "../assets/images/planets/jupiter.png";
import Saturn from "../assets/images/planets/saturn.png";
import Uranus from "../assets/images/planets/uranus.png";
import Neptune from "../assets/images/planets/neptune.png";
import ButtonLink from "./ButtonLink";

const locations = [
  {
    id: 1,
    name: "Mercury",
    src: Mercury,
    neighbor: "Venus",
    distance: "91,691,000 km",
    description:
      "Mercury is the closest planet to the Sun. The smallest planet in the Solar System (0.055 MEarth), Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes.",
  },
  {
    id: 2,
    name: "Venus",
    src: Venus,
    neighbor: "Mercury, Earth",
    distance: "41,400,000 km",
    description:
      "Venus is close in size to Earth (0.815 MEarth) and, like Earth, has a thick silicate mantle around an iron core, a substantial atmosphere, and evidence of internal geological activity. It is much drier than Earth, and its atmosphere is ninety times as dense. Venus has no natural satellites. It is the hottest planet, with surface temperatures over 400 °C.",
  },
  {
    id: 3,
    name: "Earth",
    src: Earth,
    neighbor: "Venus, Mars",
    distance: "0 km",
    description:
      "Earth is the largest and densest of the inner planets, the only one known to have current geological activity, and the only place where life is known to exist.",
  },
  {
    id: 4,
    name: "Mars",
    src: Mars,
    neighbor: "Earth, Jupiter",
    distance: "78,340,000 km",
    description:
      "Mars is smaller than Earth and Venus (0.107 MEarth). It has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars, roughly 0.6% of that of Earth but sufficient to support weather phenomena.",
  },
  {
    id: 5,
    name: "Jupiter",
    src: Jupiter,
    neighbor: "Mars, Saturn",
    distance: "628,730,000 km",
    description:
      "Jupiter, at 318 MEarth, is 2.5 times the mass of all the other planets put together. It is composed largely of hydrogen and helium. Jupiter's strong internal heat creates semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot.",
  },
  {
    id: 6,
    name: "Saturn",
    src: Saturn,
    neighbor: "Jupiter, Uranus",
    distance: "1,275,000,000 km",
    description:
      "Saturn, distinguished by its extensive ring system, has several similarities to Jupiter, such as its atmospheric composition and magnetosphere. Although Saturn has 60% of Jupiter's volume, it is less than a third as massive, at 95 MEarth. Saturn is the only planet of the Solar System that is less dense than water.",
  },
  {
    id: 7,
    name: "Uranus",
    src: Uranus,
    neighbor: "Saturn, Neptune",
    distance: "2,723,950,000 km",
    description:
      "Uranus, at 14 MEarth, has the lowest mass of the outer planets. Uniquely among the planets, it orbits the Sun on its side; its axial tilt is over ninety degrees to the ecliptic. This gives the planet extreme seasonal variation as each pole points toward and then away from the Sun.",
  },
  {
    id: 8,
    name: "Neptune",
    src: Neptune,
    neighbor: "Uranus",
    distance: "4,351,400,000 km",
    description:
      "Neptune, though slightly smaller than Uranus, is more massive (17 MEarth) and hence more dense. It radiates more internal heat than Uranus, but not as much as Jupiter or Saturn. Neptune has 14 known satellites. The largest, Triton, is geologically active, with geysers of liquid nitrogen.",
  },
];

function LocationGrid() {
  return (
    <section className="w-full flex flex-col pt-6 gap-5 border-t border-rose">
      <div>
        <h1 className="text-4xl text-white">Locations</h1>
        <p className="text-base text-lightgrey">
          Read more about all of our amazing locations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {locations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>

      <div className="flex flex-col gap-5 justify-center items-center py-8">
        <p className="text-lg text-center">
          <span className="text-lightblue">Ready to go?</span> Set up your
          reservation today
        </p>
        <ButtonLink name="Reserve" link="/#reserve" style="btn--sm" />
      </div>
    </section>
  );
}

export default LocationGrid;
