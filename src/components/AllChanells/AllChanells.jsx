import React from "react";
import { datos } from "../../api/api";
import { CardChanell } from "../CardChanell/CardChanell";

export const AllChanells = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {datos?.map((chanel) => (
        <div
          key={chanel.id}
          style={{ border: "1px solid", borderRadius: "9px", padding: "6px" }}
        >
          <CardChanell
            id={chanel.id}
            name={chanel.name}
            img={chanel.img}
            link1={chanel.link1}
            link2={chanel.link2}
          />
        </div>
      ))}
    </div>
  );
};

/*

const Ordered = () => {
  const [order, setOrder] = useState("");

  const { data: getCountries } = useGetCountriesQuery();
  const { data: sortAToZ } = useGetSortAToZQuery();
  const { data: sortZToA } = useGetSortZToAQuery();
  const { data: sortPopulationAsc } = useGetSortPopulationAscQuery();
  const { data: sortPopulationDesc } = useGetSortPopulationDescQuery();

  let datos = getCountries;
  if (order === "all") datos = getCountries;
  else if (order === "a-z") datos = sortAToZ;
  else if (order === "z-a") datos = sortZToA;
  else if (order === "populationAsc") datos = sortPopulationAsc;
  else if (order === "populationDesc") datos = sortPopulationDesc;

  return (
    <div className={style.orderContainer}>
      <h5>Order by</h5>
      <select
        className={style.selectOrder}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="all">🌐 All Countries</option>
        <option value="a-z">A...z</option>
        <option value="z-a">Z...a</option>
        <option value="populationAsc">👆🏼 Population</option>
        <option value="populationDesc">👇🏼 Population</option>
      </select>
      <Countries datos={datos} />
    </div>
  );
};

*/
