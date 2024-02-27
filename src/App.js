import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Addtask from "./Addtask";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "http://localhost:3500/places1";
  const [places1, setNewPlaces] = useState([]);
  const [AddNewTask, setAddNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        setNewPlaces(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 1000);
  }, []);

  const addNewTaskFunc = async (spot) => {
    const id = places1.length ? places1[places1.length - 1].id + 1 : 1;
    const addNewTask1 = { id, checked1: false, spot };
    const taskAfterAdd = [...places1, addNewTask1];
    setNewPlaces(taskAfterAdd);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewTask1),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const newSpotCheck = places1.map((item) =>
      item.id === id ? { ...item, checked1: !item.checked1 } : item
    );
    setNewPlaces(newSpotCheck);

    const myItems = newSpotCheck.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked1: myItems[0].checked1 }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const newSpotDelete = places1.filter((item) => item.id !== id);
    setNewPlaces(newSpotDelete);

    const deleteOptions={method:'DELETE'}
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!AddNewTask) return;
    console.log(AddNewTask);
    addNewTaskFunc(AddNewTask);
    setAddNewTask("");
  };

  return (
    <div className="App">
      <Header title="Course list" />
      <Addtask
        AddNewTask={AddNewTask}
        setAddNewTask={setAddNewTask}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading items....</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}

        {!isLoading && !fetchError && (
          <Content
            places1={places1.filter(
              (task) =>
                task.spot &&
                task.spot.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer lengthOfList={places1.length} />
    </div>
  );
}

export default App;
