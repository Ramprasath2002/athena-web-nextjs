"use client";

import { useState } from "react";
import "./job-details.scss";
import { useRouter } from "next/navigation";

export default function ApplyForm() {
  const [fileName, setFileName] = useState("No file chosen");
  const router = useRouter();

  return (
    <div className="apply-box">
      <h2>Apply for this position</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          

          router.push("/thank-you");
        }}
      >
        <div className="form-group">
          <label>
            Full Name <span>*</span>
          </label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>
            Email <span>*</span>
          </label>
          <input type="email" required />
        </div>

        <div className="form-group">
          <label>
            Phone <span>*</span>
          </label>
          <input type="tel" required />
        </div>

        <div className="form-group">
          <label>
            Cover Letter <span>*</span>
          </label>
          <textarea rows={5} required />
        </div>

        <div className="form-group">
          <label className="upload-label">
            Upload Your Resume [.pdf, .doc, .docx]
          </label>

          <div className="upload-field">
            <input
              type="file"
              id="resume"
              className="file-hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setFileName(e.target.files?.[0]?.name || "No file chosen")
              }
            />

            <label htmlFor="resume" className="file-btn mb-0!">
              Choose File
            </label>

            <span className="file-name">{fileName}</span>
          </div>
        </div>
        <button type="submit" className="apply-btn cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
