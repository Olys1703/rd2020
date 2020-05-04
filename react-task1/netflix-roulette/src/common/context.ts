import React from 'react';
export const CnxtSearchToCards = React.createContext({
  findMovies: (searchProps: { name: string; type: string }) => {},
  sortMovies: (sortKey: string) => {},
});
CnxtSearchToCards.displayName = 'Stream from search to cards';
