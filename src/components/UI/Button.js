/**
 * Reusable button component that is used throughout the code
 * @param {*} params -> onClickHandler and children prop for unique text
 * @returns jsx for button
 * @author ShaAnder
 */
export default function Button({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
