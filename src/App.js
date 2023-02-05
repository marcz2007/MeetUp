import logo from './logo.svg';
import './App.css';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { React, useState} from "react";

function App() {
    const [currentForm, setCurrentForm] = useState("login")
    const currentStateLogin = currentForm
    console.log(currentStateLogin)
    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }
  return (

    <div className="App">
      {currentForm ===  "login" ? <Login onFormSwitch={{toggleForm} /> : <Register/>

      }
    </div>
  );
}

export default App;
