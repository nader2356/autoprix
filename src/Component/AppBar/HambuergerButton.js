import IconButton from '@mui/material/IconButton/IconButton'
import styled from '@mui/material/styles/styled'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'


export default function HamburgerButton({toggleDrawer}) {
	

	const StyledIconButton = styled(IconButton)(({ theme }) => ({
		justifyContent: 'center',
		alignItems: 'center',

		padding: '0.5rem',
		marginRight: '1rem',

		color: theme.palette.icon,

		'& svg': {
			fontSize: '2.5rem',
		},

		[theme.breakpoints.down('md')]: {
			'& svg': {
				fontSize: '2rem',
			},
		},
	}))

	return (
		<StyledIconButton
			color='inherit'
			aria-label='open drawer'
			onClick={toggleDrawer}
			edge='start'
		>
			<MenuRoundedIcon />
		</StyledIconButton>
	)
}
