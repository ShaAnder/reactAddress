export function AddressHotbarClosed({ showAddressForm, openAddressForm }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleOpenAddressForm() {
    openAddressForm(true);
    console.log("opening form");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="search" />

        <select>
          <option value="0">Number</option>
          <option value="1">Description</option>
        </select>
      </form>
      <button onClick={() => handleOpenAddressForm()}>Add</button>
    </div>
  );
}
