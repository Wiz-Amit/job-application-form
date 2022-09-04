import { useState } from "react";
import Button from "./ui/button";
import Checkbox from "./ui/checkbox";
import Flex from "./ui/flex";
import FormControl from "./ui/form-control";
import RadioInput from "./ui/radio-input";

function JobApplicationForm() {
  const [step, setStep] = useState(1);

  return (
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
            <Flex className="gap-3">
              <RadioInput name="gender" label="Male" bordered />
              <RadioInput name="gender" label="Female" bordered />
            </Flex>
          </FormControl>

          <div className="actions mt-6">
            <Button className="px-20" onClick={() => setStep(2)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {step == 2 && (
        <div className="step2 space-y-3">
          <Button
            onClick={() => setStep(1)}
            className="btn-link px-0 text-slate-400"
          >
            ← Previous Step
          </Button>

          <h2 className="mb-5 text-2xl font-bold">Select Job Position</h2>

          <FormControl>
            <Flex className="flex-col gap-2">
              <RadioInput
                name="position"
                label="Frontend Developer"
                className=""
              />
              <RadioInput name="position" label="WordPress Developer" />
              <RadioInput name="position" label="UI/UX Designer" />
              <RadioInput name="position" label="Support Engineer" />
              <RadioInput name="position" label="Graphic Designer" />
            </Flex>

            <div className="mt-5">
              <Checkbox name="terms">
                <p>
                  I Accept The
                  <a href="#" className="text-primary">
                    Terms & Conditions
                  </a>
                  And
                  <a href="#" className="text-primary">
                    Privacy Policy
                  </a>
                </p>
              </Checkbox>
            </div>
          </FormControl>

          <div className="actions mt-6">
            <Button className="px-20">Submit</Button>
          </div>
        </div>
      )}
    </form>
  );
}

export default JobApplicationForm;
