import React,{Component} from 'react';
// import Header from './components/header'
// import Sidenav from './components/sidenav'
// import Footer from './components/footer'
// import Content from './components/content'
import Flogin from './components/fLogin'
import './App.css';
class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Header></Header> */}
        {/* <Sidenav></Sidenav> */}
{/*         
        <Content></Content>
        <Footer></Footer> */}

<Flogin></Flogin>
              </div>
    );
  }
}
export default App;
