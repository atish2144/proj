//import logo from "./logo.svg";
import "./App.css";
//import Greet from "./components/Greet";
//import Welcome from "./components/Welcome";
//import Hello from "./components/Hello";
//import Message from "./components/Message";
//import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
//import PassengerCounter from "./components/PassengerCounter";
//import UserGreeting from "./components/UserGreeting";
//import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";

function App() {
  return (
    <div className="App">
      {/* <StyleSheet></StyleSheet> */}

      {/* //we can also pass the props as a  */}
      <StyleSheet primary={true} />

      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting>
      <PassengerCounter></PassengerCounter> */}
      {/* <FunctionClick></FunctionClick>
      >
      <ClassClick></ClassClick> */}

      {/* <Counter /> */}
      {/* <Greet name="atish" sirname="jagtap">
        <p>This is a children prop</p>
      </Greet>
      <Greet name="shubham" sirname="patil" /> 
       <Hello /> */}
      {/* <Welcome name="atish" sirname="jagtap"></Welcome>
      <Welcome name="shubham" /> */}
      {/* <Message></Message> */}
    </div>
  );
}

export default App;
