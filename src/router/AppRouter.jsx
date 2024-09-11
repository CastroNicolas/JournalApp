import { Routes, Route } from 'react-router-dom'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { AuthRouter } from '../auth/routes/AuthRouter'
export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRouter />} />
            <Route path='/*' element={<JournalRoutes />} />
        </Routes>
    )
}
