import {Button} from "../button";
import {Input} from "../input";
import {Label} from "../label";
import {type FormEvent} from "react";
import {useState} from "react";
import {toast} from "sonner";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({userName, setUserName}: SearchFormProps) => {
  // Local state
  const [text, setText] = useState(userName);

  // Invoked when form submitted
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast("Please enter a valid username");
      return;
    }
    setUserName(text);
  };

  console.log(userName, setUserName);
  return (
    <form onSubmit={handleSearch} className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Search Github Users"
        className="flex-grow bg-background"
      />
      <Button type="submit" variant="secondary" className="bg-slate-900 text-white">
        Search
      </Button>
    </form>
  );
};
export default SearchForm;
