import { useState } from "react";

export function Address({ addresses, onSelection, selectedAddress }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // selected address, set if there is an id and it's the same as the one we're clicking
  const isSelected = selectedAddress?.id === addresses.id;

  function handleExpandAddress() {
    if (!isExpanded) setIsExpanded(true);
    if (isExpanded === true) setIsExpanded(false);
  }

  return addresses.map((address, index) => (
    <li style={{ cursor: "pointer" }} className={isSelected ? "selected" : ""}>
      <span onClick={() => handleExpandAddress()}>
        <div className="addressbook">
          <h3>
            {index + 1} {address.firstName} {address.lastName}{" "}
          </h3>
        </div>
        {isExpanded && (
          <h3>
            {address.address} {address.city} {address.postalCode}
          </h3>
        )}
      </span>
    </li>
  ));
}
