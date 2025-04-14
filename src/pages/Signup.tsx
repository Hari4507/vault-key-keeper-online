
import SignupForm from "@/components/SignupForm";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Password Vault</h1>
          <p className="text-muted-foreground">Create your account</p>
        </div>
        <div className="flex justify-center">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
