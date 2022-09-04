import { Formik } from "formik";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import Button from "./ui/button";
import Checkbox from "./ui/checkbox";
import Flex from "./ui/flex";
import FormControl from "./ui/form-control";
import RadioInput from "./ui/radio-input";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  position: "",
  terms: [],
};

const requiredMessage = "This field is mandatory";
const JobApplicationSchema = Yup.object().shape({
  name: Yup.string().max(100, "Too Long!").required(requiredMessage),
  email: Yup.string().email("Invalid email").required(requiredMessage),
  phone: Yup.string()
    .length(10, "Must have 10 digits")
    .required(requiredMessage),
  gender: Yup.string().required(requiredMessage),
  position: Yup.string().required(requiredMessage),
  terms: Yup.array()
    .length(1, "You need to accept our Terms and Condition")
    .required(requiredMessage),
});

const api = import.meta.env.VITE_API;

function JobApplicationForm({ handleSuccess }) {
  const [step, setStep] = useState(1);

  const onSubmit = useCallback((values, { setSubmitting }) => {
    const { terms, ...data } = values;
    console.log(data);

    fetch(`${api}/create.php`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        setSubmitting(false);
        if (res.success) {
          handleSuccess();
        }
      })
      .catch((error) => {
        console.log({ error });
        setSubmitting(false);
      });
  }, []);

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

          {step == 1 && (
            <div className="step1 space-y-3">
              <h2 className="mb-5 text-2xl font-bold">Personal information</h2>

              <FormControl
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
              />
              <FormControl
                name="email"
                type="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormControl
                name="phone"
                placeholder="Phone"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormControl name="gender" label="Select Gender">
                <Flex className="gap-3">
                  <RadioInput
                    name="gender"
                    label="Male"
                    bordered
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <RadioInput
                    name="gender"
                    label="Female"
                    bordered
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Flex>
              </FormControl>

              <div className="actions mt-6">
                <Button
                  className="px-20"
                  onClick={() => setStep(2)}
                  disabled={
                    !!errors.name ||
                    !!errors.email ||
                    !!errors.phone ||
                    !!errors.gender
                  }
                >
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

              <FormControl name="position">
                <Flex className="flex-col gap-2">
                  <RadioInput
                    name="position"
                    label="Frontend Developer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <RadioInput
                    name="position"
                    label="WordPress Developer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <RadioInput
                    name="position"
                    label="UI/UX Designer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <RadioInput
                    name="position"
                    label="Support Engineer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <RadioInput
                    name="position"
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
          )}
        </form>
      )}
    </Formik>
  );
}

export default JobApplicationForm;
