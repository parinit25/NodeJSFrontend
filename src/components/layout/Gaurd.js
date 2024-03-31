"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import NavBar from "../app-bar/NavBar";

const Guard = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData) {
        router.push("/login");
        return;
      }

      const roleAccess = {
        admin: ["/admin", "/dashboard", "/profile", "/home", "/products"],
        user: ["/dashboard", "/profile"],
        guest: ["/login", "/signup"],
      };

      const accessibleRoutes = roleAccess[userData.role] || [];
      if (!accessibleRoutes.includes(pathname)) {
        router.push("/");
        return;
      }

      setLoading(false);
    };

    checkAccess();
  }, [pathname, router]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Guard;
