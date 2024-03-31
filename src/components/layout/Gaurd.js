"use client"
import React, { useState, useEffect } from "react";
import  {useRouter}  from "next/navigation";
import { usePathname } from 'next/navigation';

const Guard = ({ children, requiredRole }) => {
  const router = useRouter();
  const pathname = usePathname()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      router.push("/login");
      return;
    }
    console.log(pathname)
    // Define roles and their corresponding accessible routes
    const roleAccess = {
      admin: ["/admin", "/dashboard", "/profile","/home"], // Example accessible routes for admin role
      user: ["/dashboard", "/profile"], // Example accessible routes for user role
      guest: ["/login", "/signup"], // Example accessible routes for guest role
      // Add more roles and their accessible routes as needed
    };

    // Check if the current route is accessible for the user's role
    const accessibleRoutes = roleAccess[userData.role] || [];
    if (!accessibleRoutes.includes(pathname)) {
      router.push("/"); // Redirect user to home page if route is not accessible for their role
      return;
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return <>Loading...</>;
  }

  return <>{children}</>;
};

export default Guard;
