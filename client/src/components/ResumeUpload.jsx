import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { analyzeResume } from "../services/analysisApi";

function FeatureCard({ title, description }) {
  return (
    <article className="rounded-lg bg-[#f2f3ff]/60 p-4">
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <p className="mt-1 text-[11px] leading-4 text-[#464555]">{description}</p>
    </article>
  );
}

function ResumeUpload() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // File handling to upload a file in the required format and also under a certian size
  function handleFileChange(event) {
    const file = event.target.files?.[0];

    if (file) {
      validateAndSetfile(file);
    }
  }
  function validateAndSetfile(file) {
    const allowedExtensions = [".pdf", ".docx", ".txt"];
    const maxFileSize = 10 * 1024 * 1024;

    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();

    if (!allowedExtensions.includes(extension)) {
      setError("Please upload a PDF, DOCX, or TXT file.");
      setSelectedFile(null);
      return;
    }

    if (file.size > maxFileSize) {
      setError("File must be 10MB or smaller");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setError("");
  }

  function handleDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      validateAndSetfile(file);
    }
  }

  function loadSampleJob() {
    setJobDescription(
      `We are looking for a Senior Frontend Engineer with 4+ years of experience in React, JavaScript, TypeScript, responsive design, REST APIs, and modern frontend development practices.`,
    );
  }
  const canAnalyze = selectedFile && jobDescription.trim().length > 0;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!canAnalyze || isLoading) return;

    setIsLoading(true);
    setSubmitError("");

    try {
      const data = await analyzeResume(selectedFile, jobDescription);
      navigate(`/analysis/${data.id}`, { state: { analysis: data.analysis } });
    } catch (err) {
      const message =
        err.response?.data?.error ||
        "Could not reach the server. is it Running?";
      setSubmitError(message);
    } finally {
      setIsLoading(false);
    }
  }
  function removeFile() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSelectedFile(null);
    setError("");
  }

  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#131b2e]">
      <header className="relative border-b border-slate-200 bg-white/50 px-6 py-5 shadow-sm">
        <Link
          to="/"
          className="absolute left-6 top-1/2 -translate-y-1/2 text-sm font-medium text-[#464555] hover:text-[#131b2e]"
        >
          ← Back
        </Link>

        <p className="text-center font-display text-xl font-semibold">
          Resumelyzer
        </p>
      </header>

      <section className="mx-auto w-full max-w-[768px] px-4 py-14">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Upload Resume & Job Description
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#464555]">
            Upload your resume in PDF, DOCX, or TXT format and provide target
            role parameters to initiate semantic ATS diagnostic matching.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-xl border border-black/5 bg-white p-6 shadow-lg sm:p-8"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <label className="font-display text-base font-semibold">
                Candidate Dossier <span className="text-red-700">*</span>
              </label>

              <span className="text-[11px] text-[#464555]">
                PDF, DOCX, TXT (up to 10MB)
              </span>
            </div>

            <input
              ref={inputRef}
              id="resume-upload"
              type="file"
              accept=".pdf,.docx,.txt"
              className="hidden"
              onChange={handleFileChange}
            />

            {!selectedFile ? (
              <label
                htmlFor="resume-upload"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`mt-2 flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-lg bg-[#f2f3ff]/60 p-6 text-center transition ${
                  isDragging ? "ring-2 ring-[#3525cd]" : "hover:bg-[#f2f3ff]"
                }`}
              >
                <span className="font-display text-base font-semibold">
                  Drag & drop your resume here, or{" "}
                  <span className="text-[#3525cd] underline">browse files</span>
                </span>

                <span className="mt-1 text-[11px] text-[#464555]">
                  Full layout parsing, vector embedding & semantic keyword
                  extraction
                </span>
              </label>
            ) : (
              <div className="mt-2 flex items-center justify-between rounded-lg bg-[#f2f3ff] p-4">
                <div>
                  <p className="font-display font-semibold">
                    {selectedFile.name}
                  </p>
                  <p className="mt-1 text-xs text-[#464555]">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB selected
                  </p>
                </div>

                <button
                  type="button"
                  onClick={removeFile}
                  className="rounded-md px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
                >
                  Remove
                </button>
              </div>
            )}

            {submitError && (
              <p className="mt-3 text-center text-sm text-red-700">
                {submitError}
              </p>
            )}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="job-description"
                  className="font-display text-base font-semibold"
                >
                  Target Job Description
                </label>

                <span className="rounded bg-[#f2f3ff] px-1 py-0.5 text-[11px] text-[#464555]">
                  Required
                </span>
              </div>

              <button
                type="button"
                onClick={loadSampleJob}
                className="text-[11px] font-semibold text-[#3525cd] hover:underline"
              >
                Load Sample Lead Role
              </button>
            </div>

            <textarea
              id="job-description"
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the target job post, role parameters, or key responsibilities here..."
              className="mt-2 min-h-30 w-full resize-y rounded-lg border border-black/10 p-4 text-sm leading-5 outline-none placeholder:text-[#777587] focus:border-[#3525cd] focus:ring-2 focus:ring-[#3525cd]/15"
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-[#464555] hover:text-[#131b2e]"
            >
              ← Back to Overview
            </Link>

            <button
              type="submit"
              disabled={!canAnalyze || isLoading}
              className="rounded-lg bg-[#4f46e5] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#3525cd] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Analyzing" : "Run Match Analysis →"}
            </button>
          </div>
        </form>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="98.4% ATS Compatibility"
            description="Synthesizes Workday, Greenhouse, Taleo & Lever parser architectures."
          />
          <FeatureCard
            title="Hard Keyword Gap Match"
            description="Identifies omitted credentials, frameworks, and critical leadership verbs."
          />
          <FeatureCard
            title="Adaptive Rewriting"
            description="Generates calibrated bullet points scored for hiring manager readability."
          />
        </div>
      </section>
    </main>
  );
}

export default ResumeUpload;
