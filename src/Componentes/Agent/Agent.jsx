// src/Componentes/Agent/Agent.jsx
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Agent = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://smartialab.app.n8n.cloud/webhook/f34a05c8-d579-46a7-ad34-48a4868f2738/chat',
      mode: 'window',
      showWelcomeScreen: true,
      initialMessages: [
        '¡Hola! 👋',
        '¿En qué puedo ayudarte hoy?'
      ]
    });
  }, []);

  return null; // El chat es un widget flotante, no requiere renderizar nada
};

export default Agent;
