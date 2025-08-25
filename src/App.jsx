// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/navbar'
// import { BrowserRouter, Route } from 'react-router-dom'
// import Homepage from './components/homepage'
// import { Routes } from 'react-router-dom'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <div>
//     {/* <Navbar /> */}

//        {/* <Homepage /> */}
      

//       <div className='flex justify-center items-center flex-col'>
      
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card flex justify-center items- bg-blue-100">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
        
//         Click on the Vite and React logos to learn more
//       </p>
//          </div>
//     </>
//   )
// }

//  export default App


import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import './App.css'

function App() {
  return (
    <div className="w-full min-h-screen">
      {/* <Navbar /> */}
      <BrowserRouter>
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App