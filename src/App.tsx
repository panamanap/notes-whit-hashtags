import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {MainContainer} from "./components/MainContainer";

export const App = () => {
    return <div className='app'>
        <Header title='Notes'/>
        <MainContainer/>
        <Footer/>
    </div>
}