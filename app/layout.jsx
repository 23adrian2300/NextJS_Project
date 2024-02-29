import '@styles/globals.css';
import '@styles/tailwind.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';
export const metadata = {
    title: "Tattler",
    description: "Spread your gossip and information"
}


const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                <div className="main">
                    <div className="gradient"></div>
                </div>

                <main className='app'>
                    <Navbar></Navbar>
                    {children}
                </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout