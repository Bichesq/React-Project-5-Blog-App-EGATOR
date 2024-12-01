import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import Profile from './components/Profile';
import ErrorPage from './pages/ErrorPage';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import CreatePosts from './pages/CreatePosts';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import EditPosts from './pages/EditPosts';
import DeletePosts from './pages/DeletePosts';
import Logout from './pages/Logout';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Profile />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts/:id', element: <PostDetail /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'profile/:id', element: <UserProfile /> },
      { path: 'authors', element: <Authors /> },
      { path: 'create', element: <CreatePosts /> },
      { path: 'posts/categories/:category', element: <CategoryPosts /> },
      { path: 'posts/users/:id', element: <AuthorPosts /> },
      { path: 'myposts/:id', element: <Dashboard /> },
      { path: 'posts/:id/edit', element: <EditPosts /> },
      { path: 'posts/:id/delete', element: <DeletePosts /> },
      { path: 'logout', element: <Logout /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
