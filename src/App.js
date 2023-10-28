import { useState } from "react";
import { Logo } from "./components/Logo";
import { Button } from "./components/UI/Button";
import { AddContactForm } from "./components/AddContactForm";
import { AddressList } from "./components/AddressList";
import { Footer } from "./components/Footer";

export default function App() {
  const [addressList, setAddressList] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  // Handles adding a new address, then closes the address form
  function handleAddAddress(address) {
    setAddressList((addresses) => [...addresses, address]);
    setShowAddressForm(false);
  }

  return (
    <div className="app">
      <Logo />
      <AddContactForm
        onAddAddress={handleAddAddress}
        setShowAddressForm={setShowAddressForm}
        showAddressForm={showAddressForm}
      />
      <AddressList addresses={addressList} />
      <Footer />
    </div>
  );
}
