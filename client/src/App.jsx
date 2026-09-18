import { useState } from "react";
import LandingPage from "./components/LandingPage";
import ResumeUpload from "./components/ResumeUpload"

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  if(currentPage === "upload"){
    return <ResumeUpload onBack={() => setCurrentPage("home")}/>
  }

  return <LandingPage onStart={() => setCurrentPage("upload")} />
}

export default App
