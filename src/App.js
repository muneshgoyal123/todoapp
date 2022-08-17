import React, { useState } from "react";
import ToDoList from "./ToDoList";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]); //creating empty array

    const inputEvent = (event) => {

        setInputList(event.target.value);

    };

    const getData = () => {
        setItems((olditems) => {
            return [...olditems, inputList];
        });

        setInputList("");


    }

    const deleteItems = (id) => {
        setItems((olditems) => {

            return olditems.filter((arrElem, index) => {
                return index !== id

            })
        })
    }

    return (

        <>
            <div class="container bg-light">
                <div className="col-md-12 text-center">
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div>
            <div className="main_div">
                <div className="center_div">
                    <br />

                    <h1>ToDo List</h1>

                    <br />

                    <input type="text" placeholder="Add Items" onChange={inputEvent} value={inputList} />
                    {/* <button onClick={getData}> + </button> */}
                    <IconButton onClick={getData} color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>

                    <ol>
                        {/* <li>{inputList}</li> */}
                        {items.map((val, index) => {
                            return <ToDoList
                                key={index}
                                id={index}
                                text={val}
                                onSelect={deleteItems}

                            />

                        })}

                    </ol>
                </div>

            </div>

        </>
    );


}
export default App;