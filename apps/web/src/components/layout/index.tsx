import {tw} from "lib"
import {ReactNode} from "react"

import Footer from "./footer"
import Header from "./header"

interface Props {
  children: ReactNode
  styles?: string
}

export default function Layout({children, styles = ""}: Props) {
  return (
    <>
      <Header />
      <main className={tw(`flex-1`, styles)}>{children}</main>
      <Footer />
    </>
  )
}
