import { useState } from "react";
import data from "../Data";
const List = () => {
   const [person, setPerson] = useState(data);
//    console.log(person);

   const handleClick = () => {
      setPerson("");
   };

   const per = person
      ? person.map((p) => {
           return (
              <>
                 <div className="person">
                    <img src={p.image} alt="person1" />
                    <div className="name-age">
                       <h4>{p.name}</h4>
                       <p>{p.age} years</p>
                    </div>
                 </div>
              </>
           );
        })
      : "";

   return (
      <div className="list">
         <h3>{person.length} birthdays today</h3>
         {per}
         <button onClick={handleClick}>Clear All</button>
      </div>
   );
};
export default List;
