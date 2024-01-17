import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(["none"]);
  const changeFilter = (event) => {
    if (!filter.includes(event.target.innerHTML) && filter.length < 2) {
      if (
        ![...event.target.classList].includes(
          event.target.innerHTML + `-active`
        )
      )
        event.target.classList.value +=
          ` ` + event.target.innerHTML.toLowerCase() + `-active`;
      
      
      
      
          filter[0] == "none"
        ? setFilter([event.target.innerHTML])
        : setFilter([...filter, event.target.innerHTML]);
    } else {
      if (
        [...event.target.classList].includes(
          event.target.innerHTML.toLowerCase() + `-active`
        )
      ) {
        event.target.classList.value = event.target.classList.value
          .split(" ")
          .slice(0, 3)
          .join(" ");
      }
      setFilter(filter.filter((type) => type != event.target.innerHTML));
      if (filter && filter.length == 1) setFilter(["none"]);
    }
  }

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
