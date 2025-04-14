
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Eye, EyeOff, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoredPassword {
  id: string;
  website: string;
  username: string;
  encrypted_password: string;
  created_at: string;
}

const PasswordList = () => {
  const [passwords, setPasswords] = useState<StoredPassword[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchPasswords = async () => {
      const { data, error } = await supabase
        .from("stored_passwords")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching passwords:", error);
        return;
      }

      setPasswords(data || []);
      setLoading(false);
    };

    fetchPasswords();
  }, [user]);

  if (!user) {
    return (
      <div className="text-center p-8">
        <p>Please log in to view your passwords</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center p-8">
        <p>Loading your passwords...</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Website</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Password</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {passwords.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No passwords stored yet
              </TableCell>
            </TableRow>
          ) : (
            passwords.map((password) => (
              <TableRow key={password.id}>
                <TableCell>{password.website}</TableCell>
                <TableCell>{password.username}</TableCell>
                <TableCell>••••••••</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PasswordList;
