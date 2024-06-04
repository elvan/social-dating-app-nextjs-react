import { getAuthUserId } from '@/app/actions/authActions';
import { getMessageThread } from '@/app/actions/messageActions';
import CardInnerWrapper from '@/components/CardInnerWrapper';
import ChatForm from './ChatForm';
import MessageBox from './MessageBox';

export default async function ChatPage({ params }: { params: { userId: string } }) {
  const userId = await getAuthUserId();
  const messages = await getMessageThread(params.userId);

  const body = (
    <div>
      {messages.length === 0 ? (
        'No messages to display'
      ) : (
        <div>
          {messages.map((message) => (
            <MessageBox key={message.id} message={message} currentUserId={userId} />
          ))}
        </div>
      )}
    </div>
  );

  return <CardInnerWrapper header='Chat' body={body} footer={<ChatForm />} />;
}
