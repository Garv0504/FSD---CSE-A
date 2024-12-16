/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from 'react'
import Child1 from './contextComponent/Child1.jsx'
import Child2 from './contextComponent/Child2.jsx'
import Child3 from './contextComponent/Child3.jsx'
// const mycontext = useContext();

const mycontext = createContext();

const AppContext = () => {
    // const mycontext = useContext();
    const data = {
        name: "Aryan",
        branch: "CSE",
        section: "A"
    }
  return (
    <>
        <div>AppContext</div>
        <mycontext.Provider value={data}>
            {/* <Child2/> */}
            <Child3/>
        </mycontext.Provider>
    </>
  )
}

export {mycontext};

export default AppContext