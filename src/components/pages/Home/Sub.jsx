import React, { useState } from "react";

function Sub() {
    const [email, setEmail] = useState("")
    const sumbMit =(e)=>{
        e.preventDefault();
        if (!email) {
            alert("plass inater your email");
            return
        }
        alert("Subscribers successful");
        setEmail("")
    }
  return (
    <div>
      <div
        className="hero bg-fixed bg-no-repeat bg-center bg-cover py-8"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/2e/d5/ac/2ed5acd8b70d54f5e17a05acff8efa08.jpg)",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-green-500">
              Stay Updated with InfoHunt!
            </h1>
            <p className="mb-5 text-lg italic">
              Subscribe with your email to receive the latest updates, tips, and
              daily tools right in your inbox.
            </p>
            <form action="" onSubmit={sumbMit}>
              <div className="flex items-center justify-center gap-3">
                <input onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  className="input input-info bg-transparent"
                />
                <button className="btn btn-accent text-white/90 font-bold">Subscribe Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sub;
