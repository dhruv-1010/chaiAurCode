import { useCallback, useEffect, useRef, useState } from "react";

export default function Pass() {
  const [length, setLength] = useState(8);
  const [Numbers, setNumbers] = useState(false);
  const [Characters, setCharacters] = useState(false);
  const [Password, setPassword] = useState();
  // do not know how password will generate and copied
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Numbers) {
      str += "0123456789";
    }
    if (Characters) str += "!@#$%^&*(){}[]~?";
    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random() * str.length + 1);
      pass += str[ind];
    }
    setPassword(pass);
  }, [length, Numbers, Characters, setPassword]);

  //   this causes too-many renders error in react as react prevents most of re rendering
  //   lets use useEffect forthis
  useEffect(() => {
    passwordGenerator();
  }, [length, Numbers, Characters, setPassword]);

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
      passwordRef.current.select();
      document.execCommand("copy");
    }
  }, [passwordRef]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-4 px-4 my-8  text-center bg-gray-500">
        <div className="text-center  text-2xl shadow-md my-3">
          Password Generator
        </div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="outlie-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm text-orange-500 gap-x-2">
          {/* ={" "} */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="range">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Numbers}
              onChange={(e) => {
                setNumbers((prev) => !prev);
              }}
              id="Numbers"
            />
            <label htmlFor="Numbers">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Characters}
              onChange={(e) => {
                setCharacters((prev) => !prev);
              }}
              id="Characters"
            />
            <label htmlFor="Characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
// length is updating
