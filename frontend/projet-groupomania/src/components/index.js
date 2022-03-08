
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../pages/Home';
import Profil from '../pages/Profil';


const index = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profil" exact component={Profil} />
                    <Redirect to path="/" />
                </Switch>
            </Router>    
        </div>
    );
};

export default index;