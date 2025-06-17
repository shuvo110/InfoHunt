import React, { useEffect, useState } from "react";

function HeroSection() {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const hour24 = dateTime.getHours();
  const hour12 = hour24 % 12 || 12;
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  const amPm = hour12 >= 12 ? "AM" : "PM";
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-400 to-blue-100 py-16 px-6 md:px-10  flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
            Welcome to <span className="text-blue-500">InfoHunt</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            All your daily tools in one place — Weather, Movies, Recipes, News,
            and To-Do. Stay informed, entertained, and organized.
          </p>
          <div className="flex  flex-row justify-center gap-4">
            <div className="timeBox">
              <h1 className="time">
                {hour12 < 10 ? "0" + hour12 : hour12} {amPm}
              </h1>
              <h1>Hour</h1>
            </div>
            <div className="timeBox">
              <h1 className="time">{minutes < 10 ? "0" + minutes : minutes}</h1>
              <h1>Minutes</h1>
            </div>
            <div className="timeBox">
              <h1 className="time">{seconds < 10 ? "0" + seconds : seconds}</h1>
              <h1>Seconds</h1>
            </div>
          </div>
          <p className="my-5 text-lg font-semibold italic">
            {day < 10 ? "0" + day : day} / {month < 10 ? "0" + month : month} /{" "}
            {year}
          </p>
          <div>
            <img src="src/assets/heder.png" alt=""  className="max-w-sm m-auto"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
