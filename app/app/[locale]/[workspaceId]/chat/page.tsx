// app/[locale]/[workspaceId]/chat/page.tsx

import { useParams } from 'next/navigation';

export default function ChatPage() {
  const params = useParams();

  return (
    <div style={{ padding: 40 }}>
      <h1>Chat Page Loaded!</h1>
      <p>This is the placeholder for the chat page.</p>
      <pre>
        Locale: {params.locale}
        <br />
        Workspace ID: {params.workspaceId}
      </pre>
    </div>
  );
}
