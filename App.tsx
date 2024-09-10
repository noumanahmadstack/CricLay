import React, { FC, useEffect } from 'react';
import { checkUpdates } from './src/checkUpdate';
import Navigation from './src/routes/navigation';
const App: FC = () => {
  useEffect(() => {
    checkUpdates();
  }, []);
  return (
    <Navigation />
  );
};
export default App;