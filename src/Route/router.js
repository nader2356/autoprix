
import Dashboards from "../Search/Search"
import FullLayout from "../Layout/FullLayout"

const Router =  [
	{
		path: '/',
		element: <FullLayout />,
		children: [
			
			
			{ path: '/dashboard', element: <Dashboards /> },
			
			
		],
	},
	
]

export default Router