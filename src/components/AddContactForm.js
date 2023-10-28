import { AddressHotbarOpen } from "./UI/AddressHotbarOpen";
import { AddressHotbarClosed } from "./UI/AddressHotbarClosed";

export function AddContactForm({
  showAddressForm,
  setShowAddressForm,
  onAddAddress,
}) {
  return (
    <nav>
      {!showAddressForm && (
        <AddressHotbarClosed openAddressForm={setShowAddressForm} />
      )}
      {showAddressForm && (
        <AddressHotbarOpen
          closeAddressForm={setShowAddressForm}
          onAddAddress={onAddAddress}
        />
      )}
    </nav>
  );
}
