import { forwardRef } from "react";

type InputRef = HTMLInputElement;

//could be concrete types if passed props
type SearchInputProps = never;

const SearchInput = forwardRef<InputRef, SearchInputProps>(
  (_props, inputRef) => {
    return <input ref={inputRef} className="search-input" />;
  }
);

export default SearchInput;
