import ChatListPage from './pages/ChatListPage';
import MessageListPage from './pages/MessageListPage';
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import { ThemeContext } from './context';

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
      setCurrentTheme( prevState => prevState === themes.light ? themes.dark : themes.light)
    } 
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme: toggleTheme}}>
      <Header/>
      <main>
        <Routes>
          <Route path={'/'} element={<ChatListPage />} />
          <Route path={'/message/:id'} element={<MessageListPage />}
        < /Routes>
      </main>
    </>
  );
}

export default App;
