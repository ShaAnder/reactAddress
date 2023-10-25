import { useState } from "react";
import Button from "./Button";

export function AddressHotbarOpen({ closeAddressForm, onAddAddress }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    //guard clause
    if (!firstName || !lastName || !address || !city || !postalCode) return;

    // create an address ID
    const id = crypto.randomUUID();

    // create address object
    const newAddress = {
      firstName,
      lastName,
      address,
      city,
      postalCode,
      id,
    };

    console.log(newAddress);
    // pass this to address handler
    onAddAddress(newAddress);
  }

  function handleCloseAddressForm() {
    closeAddressForm(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
        />
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
        />{" "}
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />{" "}
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />{" "}
        <label>Postal Code</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Postal Code"
        />
        <button>Add</button>
      </form>
      {/*seperate button not attached to the form so we don't use our default button UI component */}
      <button onClick={() => handleCloseAddressForm()}>Close</button>
    </div>
  );
}
