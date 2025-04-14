
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/LoginForm";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddPasswordForm from "@/components/AddPasswordForm";
import PasswordList from "@/components/PasswordList";

const Index = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-background px-4 py-8">
        <LoginForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="stored" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="stored">Stored Passwords</TabsTrigger>
              <TabsTrigger value="add">Add New Password</TabsTrigger>
            </TabsList>
            <TabsContent value="stored">
              <PasswordList />
            </TabsContent>
            <TabsContent value="add">
              <AddPasswordForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
