import * as React from 'react'
import { Route } from 'react-router-dom'
interface dataObjects {
    routes: any
	path: string
    title: string
    exact: boolean
    exacts: boolean
    strict: boolean
	component: any
}

export const SubRouters = (route: dataObjects | any) =>  {
	return (
		<Route
			path={route.path}
			render={(props) => {
				document.title = route.title || ''
				return (
					<route.component {...props} routes={route.routes} />
				)
			}}
		/>
	)
}