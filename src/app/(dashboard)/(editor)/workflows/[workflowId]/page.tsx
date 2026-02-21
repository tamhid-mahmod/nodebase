import { requireAuth } from "@/lib/auth-utils";

interface Props {
  params: Promise<{
    workflowId: string;
  }>;
}

export default async function Page({ params }: Props) {
  await requireAuth();

  const { workflowId } = await params;

  return <div>workflow id: {workflowId}</div>;
}
