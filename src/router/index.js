import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { ClipLoader	} from 'react-spinners';

const Header = lazy(() => import('../components/shared/Header'));
const MainProduct = lazy(() => import('../components/main'));
const DetailProduct = lazy(() => import('../components/main/DetailProduct'));

const CorebizRouter = () => {
    return (
        <HashRouter basename="/">
            <div>
                <Suspense fallback={<ClipLoader color="black" />}>
                    <Header/> 
                    <Switch>
                        <Route exact path="/" component={ MainProduct } />
                        <Route exact path="/detail/:id" component={ DetailProduct } />
                        <Redirect to="/" />
                    </Switch>
                </Suspense>
            </div>
        </HashRouter>
    )
}

export default CorebizRouter