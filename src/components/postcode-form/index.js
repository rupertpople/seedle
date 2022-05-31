import { useState } from "react";
import './index.css'

function PostcodeForm() {
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          postcode: postcode
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setPostcode("");
        setMessage("Postcode accepted!");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="PostcodeForm">
      <div className="img"><img src="https://i.imgur.com/OkDeTwM.png"width="500px" alt="seedlelogo"></img></div>
      <div className="vr"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={postcode}
          placeholder="enter your postcode..."
          onChange={(e) => setPostcode(e.target.value)}
        />
        <button type="submit">Search</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default PostcodeForm;