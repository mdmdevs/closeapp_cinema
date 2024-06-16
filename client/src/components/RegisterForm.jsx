import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [complexion, setComplexion] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [hometown, setHometown] = useState("");
  const [zipCode, setZipcode] = useState("");
  const [phoneNO, setPhoneNO] = useState("");
  const [lastMovie, setLastmovie] = useState("");
  const [whyActing, setWhyActing] = useState("");

  const [prevProduction, setPrevProduction] = useState("");
  const [langsSpoken, setLangsSpoken] = useState("");
  const [visitedProduction, setVisitedProduction] = useState("");
  const [currentProduction, setcurrentProduction] = useState("");
  const [witnes, setWitnes] = useState("");
  const [occupation, setOccupation] = useState("");

  const [certificate, setCertificate] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/applicant/register", {
      lastname,
      firstname,
      age,
      nationality,
      birthday,
      complexion,
      zipCode,
      hometown,
      phoneNO,
      address,
      occupation,
      currentProduction,
      visitedProduction,
      witnes,
      langsSpoken,
      lastMovie,
      whyActing,
      prevProduction,
    });

    if (res.status === 201) {
      navigate("/");
    } else {
      return;
    }
  };
  return (
    <form className="w-full flex-col p-5 gap-10 flex justify-center mx-auto">
      <div className="text-center">
        <h1 className="text-xl">RATS CASTING CALL</h1>
      </div>

      <section className="w-full flex-col max-w-lg mx-auto flex justify-center items-center ">
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            First Name{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="first name"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Last name{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Last name"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end"> Age </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Age"
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end"> Height </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Height"
            type="number"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end"> Weight </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Weight"
            type="number"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Complexion{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Complexion"
            type="text"
            onChange={(e) => setComplexion(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Phone No{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Phone No"
            type="number"
            onChange={(e) => setPhoneNO(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Birthday{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Birthday"
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Hometown{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Hometown"
            type="text"
            onChange={(e) => setHometown(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Address{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Address"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Nationality{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Nationality"
            type="text"
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Zip Code{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Zip Code"
            type="number"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Visited Production{" "}
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Production"
            type="text"
            onChange={(e) => setVisitedProduction(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 w-full max-w-md p-2">
          <label htmlFor="">Prev-production?</label>
          <select
            className="bg-black"
            onChange={(e) => setPrevProduction(e.target.value)}
          >
            <option value="yes" className="bg-black">
              Yes
            </option>
            <option value="no" className="bg-black">
              No
            </option>
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 w-full max-w-md p-2">
          <label htmlFor="">Any certificate ?</label>
          <select
            className="bg-black"
            onChange={(e) => setCertificate(e.target.value)}
          >
            <option value="yes" className="bg-black">
              Yes
            </option>
            <option value="no" className="bg-black">
              No
            </option>
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 w-full max-w-md p-2">
          <label htmlFor="">Languages spoken ?</label>
          <select
            className="bg-black"
            onChange={(e) => setLangsSpoken(e.target.value)}
          >
            <option value="English" className="bg-black">
              English
            </option>
            <option value="Twi" className="bg-black">
              Twi
            </option>
            <option value="Ga" className="bg-black">
              Ga
            </option>
            <option value="Hausa" className="bg-black">
              Hausa
            </option>
            <option value="Ayigbe" className="bg-black">
              Ayigbe
            </option>
          </select>
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Last Movie
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="lastMovie"
            type="text"
            onChange={(e) => setLastmovie(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Occupation
          </label>
          <input
            className="justify-start   text-black w-full max-w-md p-2 border-none outline-none rounded-md"
            placeholder="Occupation"
            type="text"
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md p-2">
          <label className="w-full capitalize flex justify-end">
            {" "}
            Why acting ?
          </label>
          <textarea
            name="whyActing"
            className="w-full"
            onChange={(e) => setWhyActing(e.target.value)}
          ></textarea>
        </div>
      </section>

      <button
        className="w-[200px] mx-auto bg-orange-600 texth-white p-3 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
