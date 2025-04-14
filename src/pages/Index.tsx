
import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Password Vault</h1>
          <p className="text-muted-foreground">Secure password management</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
