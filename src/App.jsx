import Header from "./components/Header"
import Content from "./components/Content"
import Modal from "./components/Modal"
import { useState } from "react"

function App() {
  const [modal, setModal] = useState(false)
  const handleModal =()=> {
    setModal(!modal)
  }

  return (
    <div>
      <Header 
        handleModal={handleModal}
      />
      <Content
        handleModal={handleModal}
      />

      {modal && (
        <Modal 
          handleModal={handleModal}
        />
      )}
      
    </div>
  )
}

export default App
