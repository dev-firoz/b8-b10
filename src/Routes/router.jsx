import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './../Layouts/roots';
import Register from './../UserEntry/Register/Register';
import Login from './../UserEntry/Login/Login';
import Home from './../Pages/Home/Home';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import AddBook from './../Pages/AddBooK/AddBook';
import AllBooks from './../Pages/AllBooks/AllBooks';
import BorrowedBooks from './../Pages/BorrowedBooks/BorrowedBooks';
import PrivateRoute from './PrivateRoute';
import BooksOfCategory from '../Pages/AllBooks/BooksOfCategory';
import BooksDetail from '../Pages/AllBooks/BooksDetail';
import UpdateBook from '../Pages/AllBooks/UpdateBook';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://assignment-category-0008-server.vercel.app/home')
            },
            {
                path: "/addBook",
                element: <PrivateRoute><AddBook /></PrivateRoute>
            },
            {
                path: "/allBooks",
                element: <PrivateRoute><AllBooks /></PrivateRoute>,
                loader: () => fetch('https://assignment-category-0008-server.vercel.app/book')
            },
            {
                path: "/BorrowedBooks",
                element: <PrivateRoute><BorrowedBooks /></PrivateRoute>,
                loader: () => fetch('https://assignment-category-0008-server.vercel.app/addBorrowedBook')
            },
            {
                path: "/updateBook/:id",
                element: <UpdateBook />,
                loader: ({ params }) => fetch(`https://assignment-category-0008-server.vercel.app/books/${params.id}`)
            },
            {
                path: "/book/:category",
                element: <PrivateRoute><BooksOfCategory></BooksOfCategory></PrivateRoute>,
                loader: () => fetch('https://assignment-category-0008-server.vercel.app/book')
            },
            {
                path: "/book/:category/:_id",
                element: <PrivateRoute><BooksDetail></BooksDetail></PrivateRoute>,
                loader: () => fetch('https://assignment-category-0008-server.vercel.app/book')
            }
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
]);

export default router;