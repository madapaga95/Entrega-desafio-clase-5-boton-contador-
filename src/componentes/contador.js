import React, { useState } from 'react'
import { Button, Card, Stack } from 'react-bootstrap'
import './Counter.css'
import './ItemCounter.css'

export const Counter = () => {
export const ItemCounter = ({itemName, stock, initial}) => {

  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  const handleAdd = () => {
    setCounter(counter + 1);
    (stock > initial && counter < stock ) && setCounter(counter + initial || 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
    (counter > 1 ) && setCounter(counter - initial || 1);    
  };

  return (
    <>
      <Card className="card-counter">
        <Card.Body>
          <Card.Title>Counter</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Add or subtract to counter
          </Card.Subtitle>
          <Card.Title>{itemName || "Item"}</Card.Title>          
          <Stack direction="horizontal" gap={3}>
            <Card.Text>
              Value:
@@ -31,10 +28,10 @@ export const Counter = () => {
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <div>
              <Button variant="primary" onClick={handleAdd}>+1</Button>
              <Button variant="primary" onClick={handleAdd}>+{initial || 1}</Button>
            </div>
            <div className="ms-auto">
              <Button variant="danger" onClick={handleSubstract}>-1</Button>
              <Button variant="danger" onClick={handleSubstract}>-{initial || 1}</Button>
            </div>
          </Stack>
        </Card.Body>
          