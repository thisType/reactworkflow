import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <p>Build, test, and deploy your projects with GitHub Actions</p>
      </header>
      <MainContent />
    </>
  );
}

export default App;
