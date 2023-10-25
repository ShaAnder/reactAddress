import { useState } from "react";

export function Address({ address, onSelection, selectedAddress }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // selected address, set if there is an id and it's the same as the one we're clicking
  const isSelected = selectedAddress?.id === address.id;

  function handleExpandAddress() {
    if (!isExpanded) setIsExpanded(true);
    if (isExpanded === true) setIsExpanded(false);
  }

  return (
    <li style={{ cursor: "pointer" }} className={isSelected ? "selected" : ""}>
      <span onClick={() => handleExpandAddress()}>
        <h3>
          {address.firstName} {address.lastName}
        </h3>
        {isExpanded && (
          <p>
            {address.address} {address.city} {address.postalCode}
          </p>
        )}
      </span>
    </li>
  );
}
