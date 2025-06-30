import {useState} from "react";
import SearchForm from "./components/ui/form/SearchForm";
import UserProfile from "./components/ui/user/UserProfile";

const App = () => {
  const [userName, setUserName] = useState("thomasneos");

  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};
export default App;
