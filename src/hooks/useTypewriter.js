import { useState, useEffect } from 'react';

function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText(''); // Resetea el texto si cambia el texto de entrada
    if (text) {
      const interval = setInterval(() => {
        setDisplayText(current => {
          if (current.length < text.length) {
            return text.slice(0, current.length + 1);
          }
          clearInterval(interval);
          return current;
        });
      }, speed);

      // Limpieza al desmontar el componente
      return () => {
        clearInterval(interval);
      };
    }
  }, [text, speed]);

  return displayText;
}

export default useTypewriter;
