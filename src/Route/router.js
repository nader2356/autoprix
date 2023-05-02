import Dashboards from "../Dashboard/Dashboards"
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