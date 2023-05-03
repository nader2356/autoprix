import IconButton from '@mui/material/IconButton/IconButton'
import styled from '@mui/material/styles/styled'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'


export default function HamburgerButton2({toggleDrawer}) {
	

	const StyledIconButton = styled(IconButton)(({ theme }) => ({
		justifyContent: 'center',
		alignItems: 'center',

		padding: '0.5rem',
		marginRight: '1rem',
        marginLeft : "0.2rem",
        
		color: "white",

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
