import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  console.log(location)

 

  return (
    <div>
      <Navbar />
      <Header type="list" />
   
    </div>
  );
};

export default List;
