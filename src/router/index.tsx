import { BrowserRouter as Router, Switch } from 'react-router-dom'
import React, { Suspense } from 'react'
import { SubRouters } from "./SubRouter"
import cofing from "./router.config"
interface RouterObj {
	path: string
    title: string
    exacts: boolean
	component: any
}
const RouterConfig = () => (
	<Router>
		<Suspense fallback={<div>load...</div>}>
			<Switch>
				{cofing.map((route: RouterObj, i: number) => {
					return <SubRouters exact strict key={i} {...route} />
				})}
			</Switch>
		</Suspense>
	</Router>
)
export default RouterConfig