import React from 'react';
import './App.css';

interface WelcomeProps {
  name: string;
  age: number;
  endereco: string;
  cidade: string;
}
 
 const Welcome: React.FC<WelcomeProps> = ({ name, age, endereco, cidade }) => {
  return (

    <div>
 <h1>Hello, {name}!</h1>
 <p>{name} mora em {cidade}</p>
 <p>no endereço {endereco}.</p>
 <p>You are {age} years old.</p>
 </div>
 );
};
function App() {
 return (
 <div className='App'>
 <Welcome name='Alice' age={25} cidade='Rio Grande' endereco='Joaquim' />
 <Welcome name='Bob' age={30} cidade='Rio Pequeno' endereco='Silvia'/>
 <Welcome name='Charlie' age={35} cidade='Coronel' endereco='Marquins'/>
 </div>
 );
}
export default App;