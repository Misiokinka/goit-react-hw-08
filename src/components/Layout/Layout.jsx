import css from "./Layout.module.css"
import AppBar from '../AppBar/AppBar'


const Layout = ({ children }) => {

  return (
    <>
      <header className={css.headerNav}> <AppBar /></header>
      <main className={css.mainBlock}>{children}</main>
    </>
  )
}

export default Layout