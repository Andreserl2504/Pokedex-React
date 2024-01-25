import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(["none"]);
  const changeFilter = (event) => {
    if (!filter.includes(event.target.innerHTML) && filter.length < 2) {
      event.target.classList.add(`${event.target.innerHTML.toLowerCase()}-active`);
      filter[0] == "none"
        ? setFilter([event.target.innerHTML])
        : setFilter([...filter, event.target.innerHTML]);
    } else {
      setFilter(filter.filter((type) => type != event.target.innerHTML));
      if (filter && filter.length == 1) setFilter(["none"]);
      event.target.classList.remove(
        `${event.target.innerHTML.toLowerCase()}-active`
      );
    }
  };

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
