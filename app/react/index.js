import RWR from 'react-webpack-rails';
RWR.run();

import HelloWorld from './components/hello-world';
RWR.registerComponent('HelloWorld', HelloWorld);

import Users from './components/users';
RWR.registerComponent('Users', Users);

import Row from './components/row';
RWR.registerComponent('Row', Row);

import Dispatcher from './components/dispatcher';
RWR.registerComponent('Dispatcher', Dispatcher);