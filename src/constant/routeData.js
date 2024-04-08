import AuthWrapper from "../components/app/routes/AuthWrapper";
import ErrorBoundaryHoc from "../components/hoc/ErrorBundary";
import BlogStatus from "../pages/admin/BlogStatus";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import ResetPassword from "../pages/auth/resetpassword/ResetPassword";
import VerifyOTP from "../pages/auth/verifyotp/VerifyOTP";
import LandingPage from "../pages/landingpage/LandingPage";
import MainLayout from "../pages/main-layout/MainLayout";
import AddBlog from "../pages/user/blog/AddBlog";

export const publicRoutes = [
  {
    path: "/",
    element: (
      <ErrorBoundaryHoc errorMessage="Something Went Wrong...">
        <LandingPage />
      </ErrorBoundaryHoc>
    ),
    children: [],
    role: ["ADMIN", "USER"],
  },
  {
    path: "/register",
    element: (
      <ErrorBoundaryHoc errorMessage="Something Went Wrong...">
        <Register />
      </ErrorBoundaryHoc>
    ),
    children: [],
    role: ["ADMIN", "USER"],
  },
  {
    path: "/login",
    element: (
      <ErrorBoundaryHoc errorMessage="Something Went Wrong...">
        <Login />
      </ErrorBoundaryHoc>
    ),
    children: [],
    role: ["ADMIN", "USER"],
  },
  {
    path: "/setnewpassowrd",
    element: (
      <ErrorBoundaryHoc errorMessage="Something Went Wrong...">
        <ResetPassword />
      </ErrorBoundaryHoc>
    ),
    children: [],
    role: ["ADMIN", "USER"],
  },
  {
    path: "/resetpassword",
    element: (
      <ErrorBoundaryHoc errorMessage="Something Went Wrong...">
        <ResetPassword />
      </ErrorBoundaryHoc>
    ),
    children: [],
    role: ["ADMIN", "USER"]
  },
  {
    path: "/verifyotp",
    element: (
      <ErrorBoundaryHoc errorMessage="Something Went Wrong...">
        <VerifyOTP />
      </ErrorBoundaryHoc>
    ),
    children: [],
    role: ["ADMIN", "USER"]
  },
];

export const authRoutes = [
  {
    path: "/",
    element: (
      <AuthWrapper>
        <MainLayout />
      </AuthWrapper>
    ),
    children: [
      {
        path: "/manageblog",
        element: (
          <ErrorBoundaryHoc errorMessage="Something Went Wrong...">
            <AddBlog />
          </ErrorBoundaryHoc>
        ),
        children: [],
        role: ["ADMIN", "USER"],
      },
      {
        path: "/manageblogstatus",
        element: (
          <ErrorBoundaryHoc errorMessage="Something Went Wrong...">
            <BlogStatus />
          </ErrorBoundaryHoc>
        ),
        children: [],
        role: ["ADMIN", "USER"],
      },
    ],
  },
];

export const routeData = [...publicRoutes, ...authRoutes];
