import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/privateRouter";
import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import HomeScreen from "./screens/home";
import NotesIndex from "./screens/notes/index";
import UserEdit from "./screens/users/edit";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/notes"
          element={
            <PrivateRoute>
              <NotesIndex />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/user/edit"
          element={
            <PrivateRoute>
              <UserEdit />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
