import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoreLayout from './common/layouts/CoreLayout';
import { routes } from './routes';

export default function root() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((val, ind) => {
          return <Route path={val.path} element={val.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
