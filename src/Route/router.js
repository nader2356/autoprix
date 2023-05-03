
import { Navigate } from "react-router-dom"
import Dashboards from "../Dashboard/Dashboards"
import FullLayout from "../Layout/FullLayout"

const Router =  [
	{
		path: '/',
		element: <FullLayout />,
		children: [
			
			
			{ path: '/dashboard', element: <Dashboards /> },
			{ path: '/clients', element: <Dashboards /> },
			
		],
	},
	
]

export default Router