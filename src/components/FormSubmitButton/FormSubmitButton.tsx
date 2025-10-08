import { useFormStatus } from "react-dom";

interface IFormSubmitButtonProps {
  readonly buttonTextIdle: string;
  readonly buttonTextPending: string;
}

const FormSubmitButton = ({
  buttonTextIdle,
  buttonTextPending,
}: IFormSubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
    >
      {pending ? buttonTextPending : buttonTextIdle}
    </button>
  );
};

export default FormSubmitButton;
