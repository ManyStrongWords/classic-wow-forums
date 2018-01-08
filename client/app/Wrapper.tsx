import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Footer, Header } from './components';
import { Forum, Home, NotFound, Oauth, Realms } from './pages';

// styling
import './scss/index.scss';

interface Props {}

interface State {}

export default class Wrapper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const storedAccount = localStorage.getItem('account');

    if (storedAccount) {
      console.log(JSON.parse(storedAccount));
    }
  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/realms" component={Realms} />
            <Route exact path="/f/:id" component={Forum} />
            <Route exact path="/oauth" component={Oauth} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
