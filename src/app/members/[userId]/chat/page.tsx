import { getAuthUserId } from '@/app/actions/authActions';
import { getMessageThread } from '@/app/actions/messageActions';
import CardInnerWrapper from '@/components/CardInnerWrapper';
import { createChatId } from '@/lib/util';
import ChatForm from './ChatForm';
import MessageList from './MessageList';

export default async function ChatPage({ params }: { params: { userId: string } }) {
  const userId = await getAuthUserId();
  const messages = await getMessageThread(params.userId);
  const chatId = createChatId(userId, params.userId);

  return (
    <CardInnerWrapper
      header='Chat'
      body={<MessageList initialMessages={messages} currentUserId={userId} chatId={chatId} />}
      footer={<ChatForm />}
    />
  );
}
