import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </div>
  )
}

export default Layout
