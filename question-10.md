## Question 10

/** Read about the code below, achieving that make input element in “SearchInput” to be
focused while search button on click **/
/\*_ Code block start _/
function SearchButton() {
return (
<button> Search </button>
);
}
function SearchInput() {
return (
<input/>
);
}
export default function Page() {
return (
<>

<nav>
<SearchButton />
</nav>
<SearchInput />
</>
);
}
/** Code block end */
