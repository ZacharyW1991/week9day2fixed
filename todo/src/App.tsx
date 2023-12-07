import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Container from "react-bootstrap/esm/Container"
// import Home from "./views/Home"
import ListView from "./views/ListView";
import { useState } from "react";
import CategoryType from "./types/category";
import ToDoForm from "./components/ToDoForm";


export default function App() {

  const [message, setMessage] = useState<string|null>(null);
  const [category, setCategory] = useState<CategoryType|null>(null);

  const [toDos, setToDos]=useState<string[]>([]);
  
  const handleFormSubmit=(event: React.FormEvent)=>{
    event.preventDefault();
    let form=event.target as HTMLFormElement;
    let task=form.task.value;
    setToDos([...toDos, task]);
    form.tasl.value='';
  }

  const flashMessage = (newMessage:string|null, newCategory:CategoryType|null): void => {
    setMessage(newMessage);
    setCategory(newCategory);
}

  return ( 
    <BrowserRouter>
      <Container data-bs-theme='dark'>
        <Navigation />
        <ToDoForm handleSubmit={handleFormSubmit}/>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/list' element={<ListView />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
