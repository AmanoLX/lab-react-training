import React from 'react';

const Greetings = ({ lang, children }) => {
  let word = '';

  switch (lang) {
    case 'de':
      word = 'Hallo';
      break;
    case 'en':
      word = 'Hello';
      break;
    case 'es':
      word = 'Hola';
      break;
    case 'fr':
      word = 'Bonjour';
      break;
    default:
      word = 'Hi';
  }

  return (
    <div className="card greetingsCard">
      <p>
        {word} {children}
      </p>
    </div>
  );
};

export default Greetings;
