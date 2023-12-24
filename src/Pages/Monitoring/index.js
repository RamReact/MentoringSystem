import React, { createContext, useContext,useState } from 'react';
import { AppContext } from '../../appContext';
export const MasherContext = createContext();

export default function Mentor() {
  const { loggedInUser } = useContext(AppContext);

  return (
    <h1>{loggedInUser}</h1>
  );
}