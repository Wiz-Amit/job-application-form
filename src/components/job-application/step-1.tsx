import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../ui/button";
import Flex from "../ui/flex";
import FormControl from "../ui/form-control";
import RadioInput from "../ui/radio-input";

const requiredMessage = "This field is mandatory";
const JobApplicationSchema = Yup.object().shape({
  name: Yup.string().max(100, "Too Long!").required(requiredMessage),
  email: Yup.string().email("Invalid email").required(requiredMessage),
  phone: Yup.string()
    .length(10, "Must have 10 digits")
    .required(requiredMessage),
  gender: Yup.string().required(requiredMessage),
});

function Step1({ onSubmit, initialValues }) {
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
              <Button className="px-20" type="submit" disabled={isSubmitting}>
                Next
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Step1;
