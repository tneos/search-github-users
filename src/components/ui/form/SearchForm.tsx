type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({userName, setUserName}: SearchFormProps) => {
  console.log(userName, setUserName);
  return <div>SearchForm</div>;
};
export default SearchForm;
