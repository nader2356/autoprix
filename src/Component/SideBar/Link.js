import List from '@mui/material/List/List'
import ListItemText from '@mui/material/ListItemText/ListItemText'
import ListItemButton from '@mui/material/ListItemButton/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon'
import styled from '@mui/material/styles/styled'

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'


import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

import { NavLink } from 'react-router-dom'
import Stack from '@mui/material/Stack/Stack'
import Box from '@mui/material/Box'


const routes= [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: <DashboardRoundedIcon />,
	},
	
	

]



export default function Links({toggleDrawer}) {
	
	const theme = useTheme()
	const isTablet = useMediaQuery(theme.breakpoints.down('md'))

	const goToTop = () => window.scrollTo(0, 0)

	const StyledList = styled(List)({
		paddingInline: '1rem',
		paddingBlock: '1.5rem',
		color: 'white',
	})

	const StyledNavLink = styled(NavLink)({
		textDecoration: 'none',
		color: 'inherit',
		transition: theme.transitions.create(['background-color', 'color'], {
			duration: theme.transitions.duration.shortest,
		}),

		
	})

	return (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
		<StyledList>
			<Stack direction='column' spacing={2}>
				{routes.map((route) => (
					<StyledNavLink to={route.path} key={route.name}>
						<ListItemButton
							
							sx={{
								borderRadius: '0.5rem',
							}}
						>
							<ListItemIcon sx ={{color : "white"}}>{route.icon}</ListItemIcon>
							<ListItemText primary={route.name} />
						</ListItemButton>
					</StyledNavLink>
				))}
			</Stack>
		</StyledList>
        </Box>
	)
}
