import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path="/Journal" element={<JournalPage />} />

            <Route path="/*" element={<Navigate to='/Journal' />} />
        </Routes >
    )
}
