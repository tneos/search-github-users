import {useState} from "react";
import Title from "./components/ui/title/Title";
import SearchForm from "./components/ui/form/SearchForm";
import UserProfile from "./components/ui/user/UserProfile";

const App = () => {
  const [userName, setUserName] = useState("steve-wilson");

  return (
    <main className="mx-auto max-w-6xl px-8 py-8">
      <Title />
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};
export default App;
