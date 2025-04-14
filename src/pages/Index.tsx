
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/LoginForm";
import PasswordList from "@/components/PasswordList";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Password Vault</h1>
          <p className="text-muted-foreground">Secure password management</p>
        </div>
        {user ? <PasswordList /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Index;
