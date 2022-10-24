import React, { useState } from 'react';

import { Button, TextField } from './components';

const App = () => {
  const [message, setMessage] = useState('');

  return (
    <>
      <div>Hola!</div>
      <Button label="pepito" />
      <TextField onChange={setMessage} value={message} />
    </>
  );
};

export default App;
