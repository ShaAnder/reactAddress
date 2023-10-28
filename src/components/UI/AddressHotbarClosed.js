import Button from "./Button";

export function AddressHotbarClosed({ showAddressForm, openAddressForm }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleOpenAddressForm() {
    openAddressForm(true);
    console.log("opening form");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="searchbar">
        <input placeholder="search" />

        <select>
          <option value="0">Number</option>
          <option value="1">Description</option>
        </select>
        <Button className="button" onClick={() => handleOpenAddressForm()}>
          Add New Contact
        </Button>
      </div>
    </form>
  );
}
