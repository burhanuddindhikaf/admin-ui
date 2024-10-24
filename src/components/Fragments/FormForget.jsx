import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";


const FormForgot = () => {
  return (
    <form action="">
      <div className="mb-6">
        <h1 className="text-xl text-center font-bold mt-8 mb-3">
          Forgot Password?
        </h1>
        <p className="w-64 mx-auto text-center text-gray-01  font-regular">
          Enter your email address to get the password reset link.
        </p>
        <div className="mt-8 mb-4">
          <LabeledInput
            label="Email address"
            type="email"
            placeholder="hello@example.com"
            name="email"
          />
        </div>
        <Button variant="bg-primary w-full text-white " type="submit">
          Password Reset
        </Button>
      </div>
    </form>
  );
};

export default FormForgot;
