import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import holbertonLogo from '../assets/holberton_logo.jpg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={holbertonLogo} alt="holberton-logo"></img>
                <h1>School dashboard</h1>
            </header>
            <div className="App-body">
                <p>
                    Login to access the full dashboard
                </p>
                <form style={{display: 'flex', gap: '1rem'}}>
                    <div>
                        <label htmlFor="email" style={{marginRight: '5px'}}>
                            Email
                        </label>
                        <input type="email" name="email" style={{border: '1px solid #D3D3D3', borderRadius: '3px'}}/>
                    </div>
                    <div>
                        <label htmlFor="password" style={{marginRight: '5px'}}>
                            Password
                        </label>
                        <input type="password" name="password" style={{border: '1px solid #D3D3D3', borderRadius: '3px'}}/>
                    </div>
                    <button type="submit" style={{border: '1px solid #D3D3D3', borderRadius: '3px', background: 'transparent'}}>OK</button>
                </form>
            </div>
            <div className="App-footer">
              <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            </div>
        </div>
    );
}

export default App;

export default App;