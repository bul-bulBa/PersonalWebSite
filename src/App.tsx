import {
    createRootRoute,
    createRoute,
    createRouter,
    RouterProvider,
    Outlet
} from '@tanstack/react-router'
import TestCasesGG from '@/components/Projects/gugugaga/TestCases'
import TestCasesCD from '@/components/Projects/cleardev/TestCases'
import LandingPage from '@/components/LandingPage/LandingPage'

const rootRoute = createRootRoute({
    component: () => <Outlet />,
})

const landingPage = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <LandingPage />,
})

const gugugaga = createRoute({
    getParentRoute: () => rootRoute,
    path: '/gugugaga',
    component: () => <TestCasesGG />,
})

const clearDev = createRoute({
    getParentRoute: () => rootRoute,
    path: '/cleardev',
    component: () => <TestCasesCD />
})

const routeTree = rootRoute.addChildren([landingPage, gugugaga, clearDev])

const router = createRouter({ routeTree })

export function App() {
    return <RouterProvider router={router} />
}

export default App;