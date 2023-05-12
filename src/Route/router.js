
import Search  from "../Search/Search"
import FullLayout from "../Layout/FullLayout"
import Dashboard from "../Dashboard/Dashboard"


const Router =  [
	{
		path: '/',
		element: <FullLayout />,
		children: [
			
			{ path: '/dashboard', element: <Dashboard /> },
			{ path: '/recherche', element: <Search /> },
			
			
			
		],
	},
	
]

export default Router