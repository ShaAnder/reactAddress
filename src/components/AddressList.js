import { Address } from "./Address";

export function AddressList({ addresses }) {
  return (
    <main className="addressbook">
      <div>
        <ul>
          <Address addresses={addresses} />
        </ul>
      </div>
    </main>
  );
}
