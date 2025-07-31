import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import WelcomeWithProps from './components/WelcomeWithProps';
import Counter from './components/Counter';
import { useState } from 'react';
import CounterWithProp from './components/CounterWithProps';
import Todoist from './components/TodoList';
import Lights from './components/Lights';
import Form from './components/Form';
import ParentFOrm from './components/ParentForm';
import { TodoParent } from './components/TodoParent';
import { CharacterCount } from './components/CharacterCount';
import { UseEffectExample } from './components/UseEffectExample';
import { Clock } from './components/Clock';


//Groceries app, simialar to todo list,
//here you need a button to remove one of the groceries item
function App() {

  const [counter, setCounter] = useState(0);
  const increaseCount = () =>{
        setCounter(counter+1);
    }
  const decreaseCount = () =>{
        setCounter(counter-1);
    }
  return (
    <>
    <Clock />
    <UseEffectExample />
    <CharacterCount />
    {/* <Form/> */}
    {/* <ParentFOrm /> */}
    {/* <TodoParent /> */}
    <CounterWithProp counter = {counter}
      increaseCount = {increaseCount}
      decreaseCount = {decreaseCount}
    />
    <WelcomeWithProps message="Welcome to class"
      anothermessage={counter}
      increaseCount = {increaseCount}
      decreaseCount = {decreaseCount}
      />
    {/* <Todoist/> */}
    {/* <Lights/>
    <Todoist/>
    <CounterWithProp counter={counter}
    increaseCount={increaseCount}
    decreaseCount= {decreaseCount}
    />
   <div> </div>
   <Counter/>
    <WelcomeWithProps message="Welcome to class"
      anothermessage="This is another message"
      />
    <div></div> */}
    <p>
    Hello world</p>
    <Welcome/>
    <WelcomeWithProps 
      message="Welcome to the class, A17"
    />
   <Counter/>
   <div> </div> 

      <Welcome/>
      <WelcomeWithProps 
        message="value"
      />
    </>
  );
}
export default App;
