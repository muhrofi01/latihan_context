import { useState, useEffect, useContext } from "react";
import User from "./User";
import Post from "./Post";
import DialogTransition from "./DialogTransition";
import DialogContext from "./context/DialogProvider";

function App() {
  const [userURL, setUserURL] = useState("/users");
  const [postURL, setPostURL] = useState("/posts");
  const [urlEnd, setUrlEnd] = useState("");

  const dialogCtx = useContext(DialogContext);

  console.log("App called");
  console.log("Ctx.dialog:", dialogCtx.dialog);

  useEffect(() => {
    console.log("APP MOUNTED");
    return () => {
      console.log("APP UNMOUNTED");
    };
  }, []);

  const handlePostRequest = (event) => {
    event.preventDefault();
    console.log("Toggle Clicked");
    dialogCtx.setDialog((prev) => !prev);
    setUrlEnd(postURL);
  };

  const handleUserRequest = (event) => {
    event.preventDefault();
    console.log("Toggle Clicked");
    dialogCtx.setDialog((prev) => !prev);
    setUrlEnd(userURL);
  };

  return (
    <div>
      <Post urlEnd={postURL} />
      <div>
        <button onClick={handlePostRequest}>Show Dialog Post</button>
      </div>
      <User urlEnd={userURL} />
      {/* <User urlEnd={userURL} key={Math.floor(Math.random() * 101)} /> */}
      <div>
        <button onClick={handleUserRequest}>Show Dialog User</button>
      </div>
      <DialogTransition url={urlEnd}></DialogTransition>
    </div>
  );
}

export default App;
