import Header from '../components/Header/Header.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import Main from '../components/Main/Main.jsx'

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="container" style={{ display: 'flex', gap: '10rem' }}>
                <Sidebar />
                <Main />
            </div>
        </>
    )
}