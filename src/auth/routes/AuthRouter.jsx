import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegiterPage } from "../pages/RegiterPage"

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegiterPage />} />
            <Route path="/*" element={<Navigate to='/login' />} />
        </Routes>
    )
}
