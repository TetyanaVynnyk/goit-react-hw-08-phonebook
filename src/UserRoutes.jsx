import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const Phonebook = lazy(() => import("./components/Phonebook/Phonebook"));
const RegisterPage = lazy(() => import("./components/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./components/LoginPage/LoginPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<Phonebook />} />
                </Route>
            </Routes>
        </Suspense>

    )
}

export default UserRoutes;