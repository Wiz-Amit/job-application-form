import { useCallback, useEffect, useState } from "react";
import Step1 from "./job-application/step-1";
import Step2 from "./job-application/step-2";

const api = import.meta.env.VITE_API;

const defaultValues = {
  id: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
  job_title: "",
  terms: [],
};

function JobApplicationForm({ handleSuccess }) {
  const [step, setStep] = useState(1);
  const [application, setApplication] = useState(defaultValues);

  useEffect(() => {
    if (application?.id && step == 1) {
      setStep(2);
    }
  }, [application]);

  const handleSubmission = useCallback(
    (values, { setSubmitting }) => {
      setApplication((application) => ({ ...application, ...values }));
      const { terms, ...data } = values;
      const endpoint = application.id
        ? `${api}/update.php`
        : `${api}/create.php`;

      if (application.id) {
        data.id = application.id;
      }
      console.log(data);

      fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => {
          setSubmitting(false);
          if (res.id) {
            setApplication((application) => ({ ...application, id: res.id }));
          }

          // Final submission after accepting terms and conditions
          if (terms && res.success && res.message == "Done") {
            handleSuccess();
          }
        })
        .catch((error) => {
          console.log({ error });
          setSubmitting(false);
        });
    },
    [application.id]
  );

  return (
    <>
      {/* {<pre>{JSON.stringify(application, null, 2)}</pre>} */}

      {step == 1 && (
        <Step1
          onSubmit={handleSubmission}
          initialValues={{
            name: application.name,
            email: application.email,
            phone: application.phone,
            gender: application.gender,
          }}
        />
      )}
      {step == 2 && (
        <Step2
          onSubmit={handleSubmission}
          setStep={setStep}
          initialValues={{
            job_title: application.job_title,
            terms: application.terms,
          }}
        />
      )}
    </>
  );
}

export default JobApplicationForm;
