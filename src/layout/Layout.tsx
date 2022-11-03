import { Outlet } from 'react-router-dom'

import { Header, SideNav } from '.'
import styles from './Layout.module.css'

export const Layout = () => (
  <>
    <SideNav />
    <Header />
    <div className={styles['layout-body']}>
      <Outlet />
    </div>
  </>
)
