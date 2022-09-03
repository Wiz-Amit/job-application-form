import { useState } from "react";
import Checkbox from "../components/ui/checkbox";
import FormControl from "../components/ui/form-control";
import RadioInput from "../components/ui/radio-input";

function JobApplication() {
  const [step, setStep] = useState(1);

  return (
    <div className="page-container flex h-screen">
      <div className="content-wrapper hidden h-full w-1/2 bg-[url('/images/job-bg.jpg')] bg-cover md:block">
        <div className="content-overlay flex h-full w-full bg-[#1a1a1a] bg-opacity-[.50]">
          <div className="m-auto h-full max-w-lg p-5 pt-[20vmin] text-white">
            <h1 className="text-4xl font-bold">Let's Join with us!</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              saepe fugit ut, pariatur quaerat libero minus assumenda adipisci
              quae, nesciunt voluptates maxime ducimus numquam iure non
              voluptas, sapiente provident doloremque.
            </p>
          </div>
        </div>
      </div>
      <div className="form-container h-full flex-1 py-6 px-10">
        <form action="" className="max-w-md">
          {step == 1 && (
            <div className="step1 space-y-3">
              <h2 className="mb-5 text-2xl font-bold">Personal information</h2>

              <FormControl name="name" placeholder="Name" required />
              <FormControl
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <FormControl name="phone" placeholder="Phone" required />
              <FormControl name="gender" label="Select Gender">
                <div className="flex gap-3">
                  <RadioInput name="gender" label="Male" bordered />
                  <RadioInput name="gender" label="Female" bordered />
                </div>
              </FormControl>

              <div className="actions mt-6">
                <button
                  className="btn btn-primary px-20"
                  onClick={() => setStep(2)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step == 2 && (
            <div className="step2 space-y-3">
              <button
                onClick={() => setStep(1)}
                className="btn btn-link px-0 text-slate-400"
              >
                ← Previous Step
              </button>

              <h2 className="mb-5 text-2xl font-bold">Select Job Position</h2>

              <FormControl>
                <div className="flex flex-col gap-2">
                  <RadioInput
                    name="position"
                    label="Frontend Developer"
                    className=""
                  />
                  <RadioInput name="position" label="WordPress Developer" />
                  <RadioInput name="position" label="UI/UX Designer" />
                  <RadioInput name="position" label="Support Engineer" />
                  <RadioInput name="position" label="Graphic Designer" />
                </div>

                <div className="mt-5">
                  <Checkbox name="terms">
                    <span>
                      I Accept The
                      <a href="#" className="text-primary">
                        Terms & Conditions
                      </a>
                      And
                      <a href="#" className="text-primary">
                        Privacy Policy
                      </a>
                    </span>
                  </Checkbox>
                </div>
              </FormControl>

              <div className="actions mt-6">
                <button className="btn btn-primary px-20">SUBMIT</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default JobApplication;
