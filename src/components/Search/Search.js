export const Search = ({ setSearch, setActivePage }) => {
  return (
    <input
      onChange={(evt) => {
         setSearch(evt.target.value);
        setActivePage(1);
      }}
      className="rounded-3 shadow form-control w-50 mx-auto py-2 my-5"
      type="search"
      placeholder="Search"
    />
  );
};
