import { FaCheck } from "react-icons/fa";
import Flex from "../ui/flex";

function SuccessScreen() {
  return (
    <Flex className="min-h-screen flex-col items-center justify-center gap-5 pb-[15vmin]">
      <div className="sign animate-pulse rounded-full border border-primary p-5 text-8xl text-primary opacity-95 md:text-6xl">
        <FaCheck />
      </div>
      <Flex className="flex-col p-2 text-center">
        <h1 className="text-3xl font-bold">Application Submitted</h1>
        <p className="flex flex-col gap-2 text-sm text-slate-500">
          <span>Thanks for your interest!</span>
          <span>
            Our review team will review your application and call you for
            interview
          </span>
        </p>
      </Flex>
    </Flex>
  );
}

export default SuccessScreen;
