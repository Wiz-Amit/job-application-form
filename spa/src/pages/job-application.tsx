import JobApplicationForm from "../components/job-application-form";
import SocialLinks from "../components/social-links";
import Flex from "../components/ui/flex";

function JobApplication() {
  return (
    <div className="page-container flex h-screen">
      <div className="content-wrapper relative hidden h-full w-1/2 md:block">
        <div className="h-full w-full bg-[url('/images/job-bg.jpg')] bg-cover">
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

            <Flex className="absolute bottom-0 left-0 w-full justify-between gap-5 p-10 text-white">
              <div className="copyright">Copyright©2022 WizAmit</div>

              <SocialLinks />
            </Flex>
          </div>
        </div>
      </div>
      <div className="form-wrapper h-full flex-1 py-6 px-10">
        <JobApplicationForm />
      </div>
    </div>
  );
}

export default JobApplication;
