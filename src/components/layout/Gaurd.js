"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import NavBar from "../app-bar/NavBar";

const Guard = ({ children, dynamicId = "" }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  console.log(pathname);

  useEffect(() => {
    const checkAccess = async () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData) {
        router.push("/login");
        return;
      }

      const roleAccess = {
        admin: [
          "/admin",
          "/dashboard",
          "/profile",
          "/home",
          "/products",
          `/products/${dynamicId}`,
        ],
        user: ["/dashboard", "/profile", `/products/${dynamicId}`],
        guest: ["/login", "/signup"],
      };

      const accessibleRoutes = roleAccess[userData.role] || [];
      console.log("pathname:", pathname);
      console.log("user role:", userData.role);
      console.log("Accessible routes:", accessibleRoutes);
      console.log(
        "Is pathname accessible?",
        accessibleRoutes.includes(pathname)
      );

      if (!accessibleRoutes.includes(pathname)) {
        router.push("/home");
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
