import ResumeUpload from "./components/ResumeUpload"

function App() {

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            AI Resumelyzer
          </h1>
          <p className="mt-2 text-slate-600">
            Get practical feedback tailored to your target role.
          </p>
        </div>

        <ResumeUpload />
      </div>
    </main>
  )
}

export default App
