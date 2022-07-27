import logo from "./logo.svg";
import "./App.css";
import Composition from "./components/2-4.Props/Composition";
import Extraction from "./components/2-4.Props/Extraction/Extraction";
import ClassComponent from "./components/2-5.State/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent";
import Event from "./components/2-7.Event/Event";
import Condition from "./components/2-8.ConditionalRendering/Condition";
import ListComponent from "./components/2-9.List/List";
import ControlledComponent from "./components/2-10.Form/ControlledComponent";
import UncontrolledComponent from "./components/2-10.Form/UncontrolledComponent";
import State from "./components/3-3.Hooks/State";
import Reducer from "./components/3-3.Hooks/Reducer";
import WelcomeDialog from "./components/3-5.Composition/WelcomeDialog";
import Dialog from "./components/3-6.Composition2/Dialog";
import ThankyouDialog from "./components/3-6.Composition2/ThankyouDialog";
import Button from "./components/3-7.HOC/Button";
import Input from "./components/3-7.HOC/Input";
import Memo from "./components/3-8.Memoization/Memo";
import Example from "./components/3-11.Portal/Example";
import Component from "./components/3-14.PropTypes/Component";
// import Example from "./components/3-10.Context/Example";
import MomentExample from "./components/Moment/MomentExample";
import DayjsExample from "./components/Dayjs/DayjsExample";
import DateFnsExample from "./components/DateFns/DateFnsExample";
import StyledComponentsExample from "./components/StyledComponents/StyledComponentsExample";
import EmotionExample from "./components/EmotionExample/EmotionExample";

function App() {
  return (
    <div className="App">
      <EmotionExample />
      {/* <StyledComponentsExample /> */}
      {/* <DateFnsExample />
      <DayjsExample />
      <MomentExample /> */}
      {/* <Component /> */}
      {/* <Example /> */}
      {/* <Example /> */}
      {/* <Memo /> */}
      {/* <Input />
      <Button /> */}
      {/* <ThankyouDialog /> */}
      {/* <Dialog /> */}
      {/* <WelcomeDialog /> */}
      {/* <Reducer /> */}
      {/* <State /> */}
      {/* <UncontrolledComponent />
      <ControlledComponent /> */}
      {/* <ListComponent /> */}
      {/* <Condition /> */}
      {/* <Event />
      <ClassComponent2 />
      <FunctionalComponent />
      <ClassComponent />
      <Composition />
      <Extraction /> */}
    </div>
  );
}

export default App;
