import FormForgot from "../components/Fragments/FormForget";
import AuthLayout from "../components/Layouts/AuthLayout";

const ForgotPage
 = () => {
  return (
    <AuthLayout type="forgot">
      <FormForgot/>
    </AuthLayout>
  );
};

export default ForgotPage;