import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import useRecipeStore from './components/recipeStore'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import FavoriteButton from './components/FavoriteButton';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        {/* Other routes here */}
      </Routes>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <AddRecipeForm />
      <useRecipeStore />
      <EditRecipeForm />
      <DeleteRecipeButton />
      <FavoritesList />
      <FavoriteButton />
      <RecommendationsList />
    </Router>
  );
}



export default App
