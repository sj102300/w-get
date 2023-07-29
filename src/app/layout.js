import './stylesheets/globals.css'
import Navbar from "./navbar";
import "../../public/static/font/style.css"



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body>
        {children}
      <Navbar />
      </body>
    </html>
  )
}