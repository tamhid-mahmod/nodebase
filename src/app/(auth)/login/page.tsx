import { LoginForm } from "@/modules/auth/components";
import { requireUnauth } from "@/lib/auth-utils";

// ----------------------------------------------------------------------

export default async function Page() {
  await requireUnauth();

  return (
    <div>
      <LoginForm />
    </div>
  );
}
