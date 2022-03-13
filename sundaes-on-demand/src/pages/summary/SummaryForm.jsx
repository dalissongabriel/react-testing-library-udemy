import { useState } from "react";
import Tooltip from "../../components/Tooltip/Tooltip";

const SummaryForm = () => {
  const [agree, setAgree] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  function handleAgreeTerms(e) {
    setSubmitDisabled(!e.target.checked);
    setAgree(e.target.checked);
  }

  return (
    <form className="flex justify-center items-center h-screen max-w-md my-0 mx-auto">
      <div className="flex justify-center items-center h-auto max-w-md m-auto">
        <Tooltip message="No ice cream will actually be delivered.">
          <input
            type="checkbox"
            id="userAgreeTerms"
            defaultChecked={agree}
            onClick={handleAgreeTerms}
          />
          <label htmlFor="userAgreeTerms">
            I agree to Terms and Conditions
          </label>
        </Tooltip>
      </div>
      <button type="submit" disabled={submitDisabled}>
        Confirm order
      </button>
    </form>
  );
};

export default SummaryForm;
