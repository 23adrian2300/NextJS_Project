import '@styles/globals.css';
import '@styles/tailwind.css';
import Navbar from '@components/Navbar';
export const metadata = {
    title: "Tattler",
    description: "Spread your gossip and information"
}


const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient"></div>
                </div>

                <main className='app'>
                    <Navbar></Navbar>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout