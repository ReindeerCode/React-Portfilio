import React, { useState } from "react";

export default function Welcome() {
  // ** I don't think I need to set state here
  // const [state, setState] = useState();

  return (
    <div className="section s1">
      <h1>Welcome</h1>

      <video
        src="../assets/welcomeTyping.mov"
        autoPlay
        loop
        playsInline
        muted
      ></video>
    </div>
  );
}

{
  /* export const Welcome = () => (
  <div className="section s1">

     <video
       src="../assets/welcomeTyping.mov"
       autoPlay
      loop
      playsInline
     muted
    ></video>
   </div>
 );  */
}
