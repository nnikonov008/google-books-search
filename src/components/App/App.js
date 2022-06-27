import './App.css';
import SearchingAreaContainer from "../SearchingArea/SearchingAreaContainer";
import ContentContainer from "../Content/ContentContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <SearchingAreaContainer/>
            <ContentContainer/>
        </div>
    );
}

export default App;
