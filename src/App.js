import AddEmployee from './components/addEmployee';
import ListEmployee from './components/listEmployee';
import React, {useState, useEffect} from 'react';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { database } from './firebase-config';



import './App.css';
import { async } from '@firebase/util';

function App() {
  const [employees, setEmployees]= useState([]);
  const[name, setName] = useState("");
  const[surname, setSurname] = useState("");
  const[email, setEmail] = useState("");
  const collectionRef=collection(database, "employees");
  
  const getEmployees=async()=>{
      let data = await getDocs(collectionRef);
      setEmployees(data.docs.map(doc=>({...doc.data(), id: doc.id})));
  }
     useEffect(()=>{
      getEmployees();
     },[]);

     const addEmployee = async()=>{
      await addDoc(collectionRef, {name:name, lastName:surname, email:email});
      getEmployees();
     }
      const deleteEmployee=async(id)=>{
          let employee=doc(collectionRef, id);
          await deleteDoc(employee);
          getEmployees();
      }
const updateEmployees =async(id)=> {
  let employee = await doc(collectionRef, id);
  await updateDoc(employee, {name:name, surname:surname, email:email});
  getEmployees();
}

  return (
    <div className="App">
        <AddEmployee setName={setName} setSurname={setSurname} setEmail={setEmail} addEmployee={addEmployee} />

        <ListEmployee employees={employees} deleteEmployee={deleteEmployee}/>
    </div>
  );
}

export default App;
