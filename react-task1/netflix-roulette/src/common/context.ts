import React from 'react';
export const CnxtSearchToCards = React.createContext({
  setMovie: (s: string) => {},
});
CnxtSearchToCards.displayName = 'Stream from search to cards';
