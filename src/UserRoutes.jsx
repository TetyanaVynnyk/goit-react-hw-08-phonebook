import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const PhonebookPage = lazy(() => import("./components/Phonebook/Phonebook"));
const RegisterPage = lazy(()=> import("./components/RegisterPage/RegisterPage"));
const LoginPage = lazy(()=> import("./components/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<PhonebookPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>

    )
}

export default UserRoutes;