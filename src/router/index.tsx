import { lazy, LazyExoticComponent, Suspense, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PageLoader from '../shared/components/PageLoader';

const WallpaperLogin: LazyExoticComponent<React.FC> = lazy(() => import('./layout/WallpaperLogin'));
const SignUp: LazyExoticComponent<React.FC> = lazy(() => import('../pages/sign-up'));
const LogIn: LazyExoticComponent<React.FC> = lazy(() => import('../pages/log-in'));
const Home: LazyExoticComponent<React.FC> = lazy(() => import('../pages/home'));

interface IProps {
  children: JSX.Element;
}

const Wrapper = ({ children }: IProps) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default function RouterApp(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route
            element={
              <Suspense fallback={<PageLoader />}>
                <WallpaperLogin />
              </Suspense>
            }
          >
            <Route
              path="/"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/sign-up"
              element={
                <Suspense fallback={<PageLoader />}>
                  <SignUp />
                </Suspense>
              }
            />
            <Route
              path="/log-in"
              element={
                <Suspense fallback={<PageLoader />}>
                  <LogIn />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Wrapper>
    </>
  );
}
