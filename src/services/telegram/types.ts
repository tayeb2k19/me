export interface TelegramMessage {
  message_id: string;
  chat: {
    id: string;
  };
}

export interface TelegramUpdate {
  callback_query?: {
    message: {
      message_id: string;
    };
    data: string;
  };
}