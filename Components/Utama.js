import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Information from './Information';
import Kontak from './Kontak'

const Utama = () => (
    <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/Information" component = {Information} />
        <Route path = "/Kontak" component = {Kontak} />
    </Switch>
)

export default Utama;
