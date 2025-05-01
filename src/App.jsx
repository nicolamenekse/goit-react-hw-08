import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./redux/auth/authOperations";
import RegisterForm from "./pages/RegisterForm/RegisterForm";
import { selectIsRefreshing } from "./redux/auth/authSelectors";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <p>Refresh User</p>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                element={<RegisterForm />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/" element={<ContactsPage />} />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      )}
    </>
  );
}
