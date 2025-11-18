import { useEffect, useRef } from 'react';
import { sendActivityNotification } from '../services/telegram/activity';

export function useActivityTracking(pageName: string) {
  const isInitialMount = useRef(true);
  const lastVisibilityState = useRef<DocumentVisibilityState>(document.visibilityState);

  useEffect(() => {
    // Only send initial notification on first mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      sendActivityNotification(`Entered ${pageName} page`, 'initial');
    }

    const handleVisibilityChange = () => {
      const currentState = document.visibilityState;
      const previousState = lastVisibilityState.current;

      // Only send notifications when state actually changes
      if (currentState !== previousState) {
        if (currentState === 'hidden') {
          sendActivityNotification(`Left ${pageName} page`, 'leave');
        } else if (currentState === 'visible' && previousState === 'hidden') {
          sendActivityNotification(`Returned to ${pageName} page`, 'return');
        }
        lastVisibilityState.current = currentState;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pageName]);
}