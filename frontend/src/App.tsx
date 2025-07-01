import { useState, useEffect } from "react";
import { GreetService } from "../bindings/changeme";
import { Events, WML } from "@wailsio/runtime";

function App() {
  const [name, setName] = useState<string>("");
  const [result, setResult] = useState<string>(
    "Please enter your name below 👇"
  );
  const [time, setTime] = useState<string>("Listening for Time event...");

  const doGreet = () => {
    let localName = name;
    if (!localName) {
      localName = "anonymous";
    }
    GreetService.Greet(localName)
      .then((resultValue: string) => {
        setResult(resultValue);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const cleanup = Events.On("time", (timeValue: any) => {
      setTime(timeValue.data);
    });
    // Reload WML so it picks up the wml tags
    WML.Reload();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex justify-center items-center gap-8 mb-8">
            <a
              wml-openURL="https://wails.io"
              className="transition-transform hover:scale-110 hover:rotate-3"
            >
              <img
                src="/wails.png"
                alt="Wails logo"
                className="w-16 h-16 object-contain"
              />
            </a>
            <div className="text-4xl font-light text-slate-400">+</div>
            <a
              wml-openURL="https://reactjs.org"
              className="transition-transform hover:scale-110 hover:-rotate-3"
            >
              <img
                src="/react.svg"
                alt="React logo"
                className="w-16 h-16 object-contain"
              />
            </a>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Wails + React
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Modern desktop applications with Go and React
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Greeting Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Interactive Greeting
              </h2>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-slate-700 dark:text-slate-300 text-lg">
                  {result}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Enter your name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  autoComplete="off"
                  placeholder="Type your name here..."
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg 
                           bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition-all duration-200"
                />
              </div>
              <button
                onClick={doGreet}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold 
                         py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 
                         transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200
                         shadow-lg hover:shadow-xl"
              >
                Greet Me!
              </button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Time Event Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                Real-time Events
              </h3>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    Live Update
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-mono text-sm">
                  {time}
                </p>
              </div>
            </div>

            {/* Learn More Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                Learn More
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Click on the logos above to explore the technologies powering
                this application.
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Go Backend
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  React Frontend
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-slate-500 dark:text-slate-400">
          <p>Built with ❤️ using Wails v3, React, and Tailwind CSS V4.1</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
