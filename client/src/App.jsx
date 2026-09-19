import AnalysisResults from "./pages/AnalysisResult";
import LandingPage from "./components/LandingPage";
import ResumeUpload from "./components/ResumeUpload"
import { Route, Routes } from "react-router-dom";

function NotFoundPage(){
  return (
    <main className="grid min-h-screen place-items-center bg-[#faf8ff] p-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">Page not found</h1>
        <p className="mt-2 text-[#464555]">
          This page does not exist in Resumelyzer.
        </p>
      </div>
    </main>
  );
}


function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/upload" element={<ResumeUpload/>} />
      <Route path="/analysis/:analysisId" element={<AnalysisResults/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
  
}

export default App
