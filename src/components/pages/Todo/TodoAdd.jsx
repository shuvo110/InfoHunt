import React, { useState } from "react";

function TodoAdd() {
  const [inputValue, setInputValue] = useState("");
  const [addAll, setAddAll] = useState([]);

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        text: inputValue,
        date: "",
        time: "",
        completed: false,
      };
      setAddAll([...addAll, newTask]);
      setInputValue("");
    } else {
      alert("অনুগ্রহ করে আপনার কাজটি লিখুন");
    }
  };

  const handleDelete = (index) => {
    if (!addAll[index].completed) {
      alert("অনুগ্রহ করে প্রথমে কাজটি সম্পন্ন হিসেবে টিক দিন");
      return;
    }
    const updatedTasks = addAll.filter((_, i) => i !== index);
    setAddAll(updatedTasks);
  };

  const handleCheckbox = (index) => {
    const updated = [...addAll];
    updated[index].completed = !updated[index].completed;
    setAddAll(updated);
  };

  const handleDateChange = (index, value) => {
    const updated = [...addAll];
    updated[index].date = value;
    setAddAll(updated);
  };

  const handleTimeChange = (index, value) => {
    const updated = [...addAll];
    updated[index].time = value;
    setAddAll(updated);
  };

  const submitForm = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <div className="bg-cover bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/e1/61/4c/e1614c8edd26b4b7d66ff2f3408027b9.jpg)",
      }}
    >
      {" "}
      <div className="py-10 container mx-auto px-4">
        <form
          onSubmit={submitForm}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="আপনার কাজটি লিখুন..."
            className="input input-info w-full sm:w-auto"
          />
          <button type="submit" className="btn btn-success w-full sm:w-auto">
            যোগ করুন
          </button>
        </form>

        <div className="mt-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center">
            আপনার কাজের তালিকা 📝
          </h2>
          <ul className="space-y-4">
            <h1>সর্বমোট কাজ : {addAll.length}</h1>
            {addAll.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between bg-black/10 p-4 rounded shadow-md gap-2"
              >
                <h3 className="font-medium text-lg">{item.text}</h3>
                <div className="flex flex-wrap gap-2 md:gap-4 items-center">
                  <input
                    type="date"
                    value={item.date || ""}
                    onChange={(e) => handleDateChange(index, e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm text-black"
                  />
                  <input
                    type="time"
                    value={item.time || ""}
                    onChange={(e) => handleTimeChange(index, e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm text-black"
                  />
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheckbox(index)}
                    className="checkbox checkbox-accent"
                  />
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-sm btn-error"
                  >
                    মুছে ফেলুন
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
