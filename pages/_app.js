import Layout from '../components/Layout'
import '../styles/globals.css'
import ContextProvider from '../contex/ContexProvider'
function MyApp({ Component, pageProps }) {
  return  <ContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContextProvider>
            
}

export default MyApp
