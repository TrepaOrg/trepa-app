import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Используем BrowserRouter
import DefaultLayout from '@layouts/DefaultLayout';
import Home from '@views/Home';

const NotFound = lazy(() => import('@views/NotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>todo add Loading...</div>}>
                <Routes>
                    {/* Default layout with nested routes */}
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<Home />} />
                    </Route>

                    {/* 404 Page */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
