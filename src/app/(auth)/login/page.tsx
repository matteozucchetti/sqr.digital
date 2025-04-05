import { GoogleSignin } from "@/components/auth/google-signin";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="max-w-md mx-auto py-12 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-sm text-gray-500">Accedi con il tuo account Google.</p>
      <GoogleSignin />
    </div>
  );
}
