import Footer from "../components/Footer";
import Header from "../components/Header";
import TopMain from "../components/TopMain";

import { Provider } from "react-redux";
import store from "../store";
import Test from "../components/test";

const Top = () => {
  return (
    <Provider store={store}>
      <Header />
      <TopMain />
      <Footer />
      <Test />
    </Provider>
  );
};

export default Top;
