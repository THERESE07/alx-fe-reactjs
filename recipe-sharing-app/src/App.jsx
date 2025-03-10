import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import useRecipeStore from './components/recipeStore'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        {/* Other routes here */}
      </Routes>
      <RecipeList />
      <AddRecipeForm />
      <useRecipeStore />
      <EditRecipeForm />
      <DeleteRecipeButton />
    </Router>
  );
}



export default App
