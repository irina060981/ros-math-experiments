import { RouterProvider } from "react-router-dom";
import { router } from "@/routers/router.jsx"

import styles from './App.module.scss'

import NavBar from "@/components/common/NavBar/NavBar";
import Footer from "@/components/common/Footer/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <main className={styles.content}>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  )
}

 