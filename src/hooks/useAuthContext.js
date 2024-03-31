"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import users from "../json/users.json"; // Importing user data from JSON file

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to log in a user
  const login = (email, password) => {
    const authenticatedUser = users.users.find(
      (user) => user.email === email && user.password === password
    );
    if (authenticatedUser) {
      setUser(authenticatedUser);
      localStorage.setItem("token", "yourAuthTokenHere"); // Store token in local storage
      return authenticatedUser; // Return user object if authentication is successful
    } else {
      setError("Invalid email or password"); // Set error message
      return null;
    }
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); // Remove token from local storage
  };

  // Function to check if user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Simulate fetching user data based on token
      setTimeout(() => {
        setUser({ email: "example@example.com" }); // Replace with actual API call
        setLoading(false);
      }, 1000); // Simulate API request delay
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// authContext.js
