import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/404';
import Mentor from '../Pages/Monitoring';
export default function MainRouter() {
  return (
    <>
      <Routes>
        <Route />
        {/* Mashers routessssssssssssssssssssssss  */}
        <Route
          path='/mentor'
          element={
           
              <Mentor/>
        
          }
        />
      
        <Route
          path='*'
          element={
          
              <NotFound />
 
          }
        />

      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
}
