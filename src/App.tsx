import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppContent } from 'components/AppContent';

export const App = () => {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}


