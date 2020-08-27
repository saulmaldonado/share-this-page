import React from 'react';

import { ShareButton } from 'share-button';
import 'share-button/dist/index.css';

const App = () => {
  return (
    <>
      <ShareButton />
      <div className='text'>
        <h1>Share This Page</h1>
        <p>
          Drop this zero-configuration React component in your application to
          instantly generate social media sharing links to the current site you
          are on
        </p>
        <code className='javascript'>
          npm install @saulmaldonado/share-this-page
        </code>
      </div>
    </>
  );
};

export default App;
