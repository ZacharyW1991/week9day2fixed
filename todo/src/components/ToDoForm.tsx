import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

type ToDoFormProps = {
  handleSubmit: (e:React.FormEvent)=>void
}


export default function ToDoForm({handleSubmit}:ToDoFormProps) {

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Label>To Do</Form.Label>
        <Form.Control type="text" placeholder="New Task" name='task'></Form.Control>    
        <Button className='w-100 mt-3' type="submit">Add to list</Button>
    </Form>
  )
  }