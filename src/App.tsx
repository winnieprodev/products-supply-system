import { ApolloProvider } from "@apollo/client";
import { React } from "@ungap/global-this";
import { ShoppingCart, ShoppingCartWrapper } from "components/ShoppingCart";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Empty } from "utils/types";

import AppStyles from "./app.styled";
import {
  Button,
  Content,
  LoaderScreen,
  Header,
  LoginInfo,
  Logo,
} from "./components";
import { useApolloClient } from "./hooks";
import Routes from "./routes";
import {
  Checkout as CheckoutScene,
  Home as HomeScene,
  MyOrders as MyOrdersScene,
  NewOrder as NewOrderScene,
  OutletList as OutletListScene,
  Search as SearchScene,
  SupplierDetails as SuppliersDetailsScene,
  SuppliersList as SuppliersListScene,
} from "./scenes";

export const App: React.FC<Empty> = () => {
  const client = useApolloClient();

  if (client === undefined) {
    return <LoaderScreen />;
  }
  return (
    <ApolloProvider client={client}>
      <AppStyles>
        <Router>
          <ShoppingCartWrapper>
            <Header>
              <Header.AlignLeft>
                <Link to={Routes.HOME.use()}>
                  <Logo />
                </Link>
              </Header.AlignLeft>
              <Header.AlignRight>
                <Link to={Routes.MY_ORDERS.use()}>
                  <Button transparent>My Orders</Button>
                </Link>
                <Link to={Routes.OUTLET_LIST.use()}>
                  <Button primary>New Order</Button>
                </Link>
                <ShoppingCart />
                <LoginInfo />
              </Header.AlignRight>
            </Header>
            <Content>
              <Switch>
                <Route path={Routes.HOME.route} exact component={HomeScene} />
                <Route path={Routes.SEARCH.route} component={SearchScene} />
                <Route
                  path={Routes.OUTLET_LIST.route}
                  exact
                  component={OutletListScene}
                />
                <Route
                  path={Routes.MY_ORDERS.route}
                  component={MyOrdersScene}
                />
                <Route
                  path={Routes.SUPPLIERS_LIST.route}
                  exact
                  component={SuppliersListScene}
                />
                <Route
                  path={Routes.SUPPLIER_DETAILS.route}
                  component={SuppliersDetailsScene}
                />
                <Route path={Routes.CHECKOUT.route} component={CheckoutScene} />
                <Route
                  path={Routes.NEW_ORDER.route}
                  component={NewOrderScene}
                />
              </Switch>
            </Content>
          </ShoppingCartWrapper>
        </Router>
      </AppStyles>
    </ApolloProvider>
  );
};

export default App;
