

import "./server"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import HostVansLayout from "./components/HostVansLayout"

import Home from "./pages/Home"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Login from "./pages/Login"
import AuthRequired from "./components/AuthRequired"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route element={<AuthRequired />}>
                <Route path="host" element={<HostLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="income" element={<Income />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="vans" element={<HostVans />} />
                    <Route path="vans/:id" element={<HostVansLayout />} >
                        <Route index element={<HostVanDetail />} />
                        <Route path="pricing" element={<HostVanPricing />} />
                        <Route path="photos" element={<HostVanPhotos />} />
                    </Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
