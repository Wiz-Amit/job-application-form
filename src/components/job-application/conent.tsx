import SocialLinks from "../social-links";
import Flex from "../ui/flex";

function JobApplicationContent() {
  return (
    <div className="h-full w-full bg-[url('/images/job-bg.jpg')] bg-cover">
      <div className="content-overlay flex h-full w-full bg-[#1a1a1a] bg-opacity-[.50]">
        <div className="m-auto h-full max-w-lg p-5 pt-[20vmin] text-white">
          <h1 className="text-4xl font-bold">Let's Join with us!</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe
            fugit ut, pariatur quaerat libero minus assumenda adipisci quae,
            nesciunt voluptates maxime ducimus numquam iure non voluptas,
            sapiente provident doloremque.
          </p>
        </div>

        <Flex className="absolute bottom-0 left-0 w-full justify-between gap-5 p-10 text-white">
          <div className="copyright">
            Copyright © 2022 &nbsp;
            <a
              href="https://www.wizamit.com"
              target="_blank"
              className="font-bold"
            >
              WizAmit
            </a>
          </div>

          <SocialLinks />
        </Flex>
      </div>
    </div>
  );
}

export default JobApplicationContent;
