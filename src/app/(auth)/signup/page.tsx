import { requireUnauth } from "@/lib/auth-utils";
import { RegisterForm } from "@/modules/auth/components";

// ----------------------------------------------------------------------

export default async function Page() {
  await requireUnauth();

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
