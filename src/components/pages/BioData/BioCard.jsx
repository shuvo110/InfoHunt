import React, { useRef, useState } from "react";

function BioCard() {
  const nameRef = useRef(null);
  const dateOfBrithRef = useRef(null);
  const phoneRef = useRef(null);
  const religionRef = useRef(null);
  const photoRef = useRef(null);
  const previewRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const bloodRef = useRef(null);
  const address = useRef(null);
  const [gender, setGender] = useState(null);
  const [bioData, setBioData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      dateOfBrith: dateOfBrithRef.current.value,
      phone: phoneRef.current.value,
      religion: religionRef.current.value,
      bloodGroup: bloodRef.current.value,
      address: address.current.value,
      gender: gender,
      education: educationRef.current.value,
      skills: skillsRef.current.value,
      photoURL: previewRef.current?.src, // use hidden preview img src
    };

    setBioData(data);

    // Clear fields
    nameRef.current.value = "";
    dateOfBrithRef.current.value = "";
    phoneRef.current.value = "";
    religionRef.current.value = "";
    bloodRef.current.value = "";
    educationRef.current.value = "";
    skillsRef.current.value = "";
    photoRef.current.value = "";
    address.current.value = "";
    setGender(null);
  };

  const handleImageChange = () => {
    const file = photoRef.current.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      previewRef.current.src = url;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Bio Data Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full Name" refValue={nameRef} placeholder="আপনার নাম লিখুন" />
          <Input label="Date of Birth" type="date" refValue={dateOfBrithRef} />
          <Input label="Phone Number" type="number" refValue={phoneRef} placeholder="মোবাইল নাম্বার" />

          <Select label="Religion" refValue={religionRef} options={["Muslim", "Hindu", "Christian", "Buddhist"]} />
          <Select label="Blood Group" refValue={bloodRef} options={["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"]} />

          <Input label="Address" refValue={address} placeholder="আপনার ঠিকানা" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label className="w-[200px] font-medium">Gender</label>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={item}
                    checked={gender === item}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label className="w-[200px] font-medium">Your Photo</label>
            <input
              type="file"
              ref={photoRef}
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full input-accent"
              required
            />
          </div>

          <Input label="Education" refValue={educationRef} placeholder="শিক্ষাগত যোগ্যতা লিখুন" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label className="w-[200px] font-medium">Skills</label>
            <textarea
              ref={skillsRef}
              className="textarea textarea-bordered w-full input-accent"
              placeholder="আপনার দক্ষতা লিখুন"
              rows="4"
              required
            />
          </div>

          <button className="btn btn-success w-full">Submit Bio Data</button>
        </form>
      </div>

      {/* Preview */}
      {bioData.name && (
        <div className="max-w-2xl mx-auto mt-10 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl text-center py-5 font-bold mb-4 text-gray-700">
            Your Bio Data
          </h2>
          <div className="flex justify-between items-start gap-6">
            <div className="space-y-3 text-gray-700">
              <p><strong>Name:</strong> {bioData.name}</p>
              <p><strong>Date of Birth:</strong> {bioData.dateOfBrith}</p>
              <p><strong>Phone:</strong> {bioData.phone}</p>
              <p><strong>Religion:</strong> {bioData.religion}</p>
              <p><strong>Blood Group:</strong> {bioData.bloodGroup}</p>
              <p><strong>Address:</strong> {bioData.address}</p>
              <p><strong>Gender:</strong> {bioData.gender}</p>
              <p><strong>Education:</strong> {bioData.education}</p>
              <p><strong>Skills:</strong> {bioData.skills}</p>
            </div>
            {bioData.photoURL && (
              <img
                src={bioData.photoURL}
                alt="Preview"
                className="w-[150px] h-[100px] object-contain rounded-md"
              />
            )}
          </div>
        </div>
      )}

      {/* Hidden image for src capture */}
      <img ref={previewRef} className="hidden" alt="preview" />
    </div>
  );
}

// Custom input field component
const Input = ({ label, refValue, placeholder = "", type = "text" }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
    <label className="w-[200px] font-medium">{label}</label>
    <input
      type={type}
      ref={refValue}
      placeholder={placeholder}
      className="input input-bordered w-full input-accent"
      required
    />
  </div>
);

// Custom select field
const Select = ({ label, refValue, options }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
    <label className="w-[200px] font-medium">{label}</label>
    <select
      ref={refValue}
      defaultValue=""
      className="select select-bordered w-full input-accent"
      required
    >
      <option value="" disabled>
        Select {label}
      </option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default BioCard;
