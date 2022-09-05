import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../ui/button";
import Checkbox from "../ui/checkbox";
import Flex from "../ui/flex";
import FormControl from "../ui/form-control";
import RadioInput from "../ui/radio-input";

const requiredMessage = "This field is mandatory";
const JobApplicationSchema = Yup.object().shape({
  job_title: Yup.string().required(requiredMessage),
  terms: Yup.array()
    .length(1, "You need to accept our Terms and Condition")
    .required(requiredMessage),
});

function Step2({ onSubmit, setStep, initialValues }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={JobApplicationSchema}
      onSubmit={onSubmit}
    >
      {({
        isSubmitting,
        handleChange,
        handleBlur,
        values,
        errors,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="max-w-md">
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}

          <div className="step2 space-y-3">
            <Button
              onClick={() => setStep(1)}
              className="btn-link px-0 text-slate-400"
            >
              ← Previous Step
            </Button>

            <h2 className="mb-5 text-2xl font-bold">Select Job Position</h2>

            <FormControl name="job_title">
              <Flex className="flex-col gap-2">
                <RadioInput
                  name="job_title"
                  label="Frontend Developer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <RadioInput
                  name="job_title"
                  label="WordPress Developer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <RadioInput
                  name="job_title"
                  label="UI/UX Designer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <RadioInput
                  name="job_title"
                  label="Support Engineer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <RadioInput
                  name="job_title"
                  label="Graphic Designer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Flex>
            </FormControl>

            <div className="mt-5">
              <FormControl name="terms">
                <Checkbox
                  name="terms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <p>
                    I Accept The &nbsp;
                    <a href="#" className="text-primary">
                      Terms & Conditions
                    </a>
                    &nbsp;And&nbsp;
                    <a href="#" className="text-primary">
                      Privacy Policy
                    </a>
                  </p>
                </Checkbox>
              </FormControl>
            </div>

            <div className="actions mt-6">
              <Button type="submit" disabled={isSubmitting} className="px-20">
                Submit
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Step2;
