import { Address } from "./Address";

export function AddressList({ addresses }) {
  return (
    <ul>
      {addresses.map((address) => (
        <Address address={address} key={address.id} />
      ))}
    </ul>
  );
}
