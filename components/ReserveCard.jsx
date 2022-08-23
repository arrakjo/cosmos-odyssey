import { useState } from "react";

function ReserveCard(props) {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [check, setCheck] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    alert(`
            Congratulations, ${firstName} ${lastName}!
            You've reserved a trip from ${props.origin} to ${props.destination}!
        `);

    setModal(false);
  };

  const handleFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-1 bg-grey rounded-md p-10">
      <h3 className="text-3xl mb-4 font-semibold">{props.provider}</h3>
      <p className="text-lg font-semibold">
        Distance: <span className="font-normal">{props.distance} km</span>
      </p>
      <p className="text-lg font-semibold">
        Flight start: <span className="font-normal">{props.flightStart}</span>
      </p>
      <p className="text-lg font-semibold">
        Flight end: <span className="font-normal">{props.flightEnd}</span>
      </p>
      <p className="italic mb-8">(Total travel time: {props.duration})</p>
      <p className="text-xl font-semibold">
        Total price:{" "}
        <span className="font-normal border-b border-rose">€{props.price}</span>
      </p>
      <button className="btn--sm mt-8" onClick={handleModal}>
        Choose option
      </button>

      {modal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-40">
          <div className="w-full h-full grid place-items-center p-5">
            <div className="modal w-full md:max-w-xl absolute top-0 left-0 right-0 bottom-0 md:block md:top-auto md:left-auto md:right-auto md:bottom-auto overflow-auto p-5 py-10 md:p-12 bg-black rounded-xl shadow-lg z-50">
              <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <p className="text-xl text-lightgrey border-b border-grey mb-3">
                    Your trip details
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-lightgrey">Origin: {props.origin}</p>
                    <p className="text-lightgrey mb-2">
                      Destination: {props.destination}
                    </p>
                    <p className="text-lightgrey">Provider: {props.provider}</p>
                    <p className="text-lightgrey">Start: {props.flightStart}</p>
                    <p className="text-lightgrey mb-2">
                      End: {props.flightEnd}
                    </p>
                    <p className="text-lightgrey">
                      Total travel time: {props.duration}
                    </p>
                    <p className="text-lightgrey">
                      Total price: €{props.price}
                    </p>
                  </div>
                  <div className="border-b border-grey py-2"></div>
                </div>

                <p className="text-2xl border-b border-lightblue">
                  Enter your personal details
                </p>

                <form onSubmit={handleModalSubmit} className="accent">
                  <label className="label" htmlFor="fname">
                    First name
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    required
                    className="input mb-5 w-full"
                    id="fname"
                    name="fname"
                    value={firstName}
                    onChange={handleFirstName}
                  />

                  <label className="label" htmlFor="lname">
                    Last name
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    required
                    className="input mb-5 w-full"
                    id="lname"
                    name="lname"
                    value={lastName}
                    onChange={handleLastName}
                  />

                  <label className="label text-base" htmlFor="terms">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      aria-required="true"
                      required
                      value={check}
                      onClick={() => setCheck(true)}
                    />{" "}
                    I agree with the terms.
                  </label>

                  <div className="w-full flex flex-wrap gap-5 justify-start pt-8">
                    <button
                      className="btn--sm hover:bg-transparent min-w-[146px]"
                      type="submit"
                    >
                      Confirm
                    </button>
                    <button
                      className="btn--sm bg-transparent border-rose text-rose hover:bg-rose hover:text-black min-w-[146px]"
                      onClick={handleModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReserveCard;
