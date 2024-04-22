
import css from './App.module.css'
import "modern-normalize";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';
import { apiRefreshUser } from '../redux/auth/operations';
import Layout from './Layout/Layout';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';



const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));



const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiRefreshUser())
  }, [])

  return (
    <div className={css.mainContainer}>

  <div className={css.mainWrapper} >  <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>

            <Route path='/' element={
              <PrivateRoute> <HomePage /> </PrivateRoute>} />

            <Route path='/register' element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            } />
            <Route path='/login' element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            } />
            <Route path='/contacts' element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            } />


            <Route path="*" element={<Navigate to="/404" replace />} />

          </Routes>
        </Suspense>
      </Layout>

</div>
    </div>



  )



};

export default App


