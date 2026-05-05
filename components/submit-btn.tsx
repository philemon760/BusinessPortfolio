import React from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3.25rem] w-full bg-[#0096c7] text-white rounded-xl outline-none transition-all focus:scale-[1.02] hover:scale-[1.02] hover:bg-[#0077b6] active:scale-100 disabled:scale-100 disabled:bg-opacity-65 font-semibold text-base shadow-md shadow-[#0096c7]/25"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          <BsCalendarCheckFill className="text-sm opacity-80" />
          Confirm Appointment Request
        </>
      )}
    </button>
  );
}
