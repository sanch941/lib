import 'core-js';
import 'regenerator-runtime/runtime';
// Из за использования webpack dll plugin, при импорта whydid you render
// через require появляется ошибка, поэтому его импортируем в es6
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@features/app';

ReactDOM.render(<App />, document.getElementById('root'));
