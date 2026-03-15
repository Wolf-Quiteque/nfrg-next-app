'use client';
import { createContext } from 'react';

export const EditModeContext = createContext({
  isEditMode: false,
  toggleEditMode: () => {},
  isAdmin: false,
});
