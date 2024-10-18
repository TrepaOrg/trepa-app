import React, { lazy, Suspense } from 'react';
import DefaultLayout from '@layouts/DefaultLayout';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

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
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
