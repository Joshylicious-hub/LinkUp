import { MessageConversations } from '../components/MessageConversations';
import { MessageUserInteraction } from '../components/MessageUserInteraction';
import { MessageContactInfo } from '../components/MessageContactInfo';
import './MessagePage.css';

export function MessagePage() {
  return (
   <>
   <title>LinkUp</title>
    <div className="message-body-container">

      <MessageConversations/>
      <MessageUserInteraction/>
      <MessageContactInfo/>
    </div>
   </>
    
  );
}