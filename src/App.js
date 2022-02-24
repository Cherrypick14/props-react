import './App.css';
import Handle from './components/Handle'
import Hobbies from './components/Hobbies';

function App() {
    const user ={
        name: "Devin",
        location: "Toronto",
         age: 22,
         hobbies: ["skiing"]
    };
  return (
    <div className="App">
      <h1>Hey there, React</h1>

         <div className="header">
           <p>I always build for the web</p>
         </div>
         <div className="content">
       <Handle name={"CherylDev"} age ={21} location={"NewYork"} user={user}/>
         </div>
         <Hobbies />
    </div>
  );
}

export default App;
