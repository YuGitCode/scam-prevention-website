import React from 'react';
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import Datapage from './pages/Datapage';
import Simulation from './pages/Simulation';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path='/data' element={<Datapage />} />
      <Route path='/simulation' element={<Simulation />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
