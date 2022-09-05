import { useState } from "react";
import JobApplicationForm from "../components/job-application-form";
import JobApplicationContent from "../components/job-application/conent";
import JobApplicationCompleted from "../components/job-application/success-screen";

function JobApplication() {
  const [completed, setCompleted] = useState(false);

  if (completed) {
    return <JobApplicationCompleted />;
  }

  return (
    <div className="page-container flex h-screen">
      <div className="content-wrapper relative hidden h-full w-1/2 md:block">
        <JobApplicationContent />
      </div>
      <div className="form-wrapper h-full flex-1 py-6 px-10">
        <JobApplicationForm handleSuccess={() => setCompleted(true)} />
      </div>
    </div>
  );
}

export default JobApplication;
