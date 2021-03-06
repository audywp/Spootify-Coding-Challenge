import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModalLogin from './common/components/ModalLogin/Login';

import { routes } from './routes';

const newVariable = 'asd';

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((val, ind) => {
          return (
            <Route path={val.path} element={val.element}>
              {val.child.map((value) => {
                return <Route path={value.path} element={value.element} />;
              })}
            </Route>
          );
        })}
      </Routes>
      <ModalLogin />
    </BrowserRouter>
  );
}
