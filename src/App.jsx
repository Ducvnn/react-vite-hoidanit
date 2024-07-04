import Header from './component/learn/layout/header';
import Footer from './component/learn/layout/footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App