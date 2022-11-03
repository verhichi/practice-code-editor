import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'

import { PATHS } from '@/router'

import styles from './SideNav.module.css'

export const SideNav = () => (
  <Drawer variant="permanent" anchor="left">
    <Toolbar />
    <Divider />
    <List className={styles['side-nav']}>
      <Link to={PATHS.HOME}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Divider />
      <Link to={PATHS.MONACO}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="MONACO" />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  </Drawer>
)
