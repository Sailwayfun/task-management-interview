export default function SearchButton({
  onFocusInput,
}: {
  onFocusInput: () => void;
}) {
  return (
    <button onClick={onFocusInput} className="search-btn">
      {" "}
      Search{" "}
    </button>
  );
}
