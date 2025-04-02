import "./page.css";

import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import { useRef } from "react";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>();

  function focusInput() {
    if (inputRef.current instanceof HTMLInputElement) {
      inputRef.current.focus();
    }
  }
  return (
    <>
      <nav className="nav">
        <SearchButton onFocusInput={focusInput} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
