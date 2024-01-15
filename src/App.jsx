import { RouterProvider } from "react-router-dom";
import { router } from "@/routers/router.jsx"
import { MathJaxContext } from "better-react-mathjax"

import styles from './App.module.scss'

import NavBar from "@/components/common/NavBar/NavBar";
import Footer from "@/components/common/Footer/Footer";

export default function App() {

  const config = {
    options: { enableMenu: false },
    "fast-preview": {
      disabled: true
    },
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    },
    messageStyle: "none"
  };

  return (
    <>
      <NavBar />
      <MathJaxContext 
        version={3} src={"/mathjax/tex-chtml.js"}
        config={config}
      >
        <main className={styles.content}>
          <RouterProvider router={router} />
        </main>
      </MathJaxContext>
      <Footer />
    </>
  )
}

 