import React from 'react'
import { db } from './firebase-config';
import { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

function Add() {
    const [name, setname] = useState("")
    const [userdata, setuserdata] = useState([])
    let table = collection(db, "user")

    const submit = async () => {
        try {
            await addDoc(table, { name: name })
            setname("")
            getuser()
        } catch (error) {
            console.log(error);
            return false
        }
    }
    const getuser = async () => {
        try {
            let data = await getDocs(table);
            let res = data.docs.map((val) => (
                { ...val.data(), id: val.id }
            ))
            console.log(res);
            setuserdata(res)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const removed = async (id) => {
        try {
            await deleteDoc(doc(db, "user", id));
            getuser();
        } catch (err) {
            console.log(err);
            return false
        }
    }

    useEffect(() => {
        getuser()
    }, [])
    console.log(userdata);

    return (
        <div>
            <div className="container">
                <center>
                    <h1>Todo List</h1>
                </center>
                <div className="d-flex justify-content-center">
                    <div className="">
                        <div style={{ width: "40%" }} className='d-flex m-auto'>
                            <div class="input-container">
                                <input placeholder="Add Item" type="text" value={name} onChange={(e) => setname(e.target.value)} />
                                <button class="button" onClick={submit}>Add</button>
                            </div>
                        </div>

                        <div>
                            {
                                userdata && userdata.map((val) =>
                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "30px", background: "linear-gradient(135deg, #BFF0FA 0%, #4998FF 100%", width: "800px", margin: "20px 0 20px 0", borderRadius: "10px", flexWrap: "wrap" }}>
                                        <h2>{val.name}</h2>
                                        <button class="bin-button" onClick={() => removed(val.id)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 39 7"
                                                class="bin-top"
                                            >
                                                <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                                                <line
                                                    stroke-width="3"
                                                    stroke="white"
                                                    y2="1.5"
                                                    x2="26.0357"
                                                    y1="1.5"
                                                    x1="12"
                                                ></line>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 33 39"
                                                class="bin-bottom"
                                            >
                                                <mask fill="white" id="path-1-inside-1_8_19">
                                                    <path
                                                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                                    ></path>
                                                </mask>
                                                <path
                                                    mask="url(#path-1-inside-1_8_19)"
                                                    fill="white"
                                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                                ></path>
                                                <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                                                <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 89 80"
                                                class="garbage"
                                            >
                                                <path
                                                    fill="white"
                                                    d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add