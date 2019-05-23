import React from 'react';
import Layout from './index';
import { addLocaleData } from 'react-intl';

import messages from '../data/messages/fr';
import fr from 'react-intl/locale-data/fr';
import 'intl/locale-data/jsonp/fr';

addLocaleData(fr);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />);