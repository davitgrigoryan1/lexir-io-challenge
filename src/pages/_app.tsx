import Layout from "@components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "src/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
