/*
File: routes.js
Description: Defines route access levels and redirects
*/

// Public Routes without Auth
export const publicRoutes = ["/", "/legal"];

// Auth Routes, need to be available all time
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
  "/auth/new-verification",
];

// Always allow
export const apiAuthPrefix = "/api/auth";

// Redirect when logged in
export const DEFAULT_LOGIN_REDIRECT = "/auth/settings";

// Redirect when not logged in
export const DEFAULT_UNAUTHORIZED_REDIRECT = "/auth/login";
