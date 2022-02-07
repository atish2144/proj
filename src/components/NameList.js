// import React from "react";

// function NameList() {
//   const names = [1, 2, 3];
//   const NameList1 = names.map((name1) => <h5>{name1 * 3}</h5>);

//   return <div>{NameList1}</div>;
// }

// export default NameList;

import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "diana", "Bruce"];

  const nameList = names.map((name, index) => (
    <h5 key={index}>
      {index} {name}{" "}
    </h5>
  ));
  return <div>{nameList}</div>;
}

// function NameList() {
//   const persons = [
//     {
//       nam: "atish",
//       age: 23,
//       skill: "React",
//     },
//     {
//       nam: "asif",
//       age: 22,
//       skill: "Angular",
//     },
//     {
//       nam: "Navin",
//       age: 24,
//       skill: "React",
//     },
//   ];
// const PersonList = persons.map((person) => (
//   <h5>
//     I am {person.nam} I am {person.age} yerars old and i learning{" "}
//     {person.skill}
//   </h5>
// ));

//   const personList = persons.map((person) => (
//     <h6>
//       i am {person.nam} , i am {person.age}Years old and i am learning{" "}
//       {person.skill}
//     </h6>
//   ));
//   return <div>{personList}</div>;

//   const PersonList = persons.map((person) => (
//     <person key={person.id} person={person.nam} />
//   ));
//   return <div>{PersonList}</div>;
// }

export default NameList;
