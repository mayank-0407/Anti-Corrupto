import React from 'react';

function MobileApp() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto mt-32 font-mono text-lg text-white bg-blue-500 w-4/6 rounded-3xl p-5">
        <p className="font-bold">Having trouble using the website?</p>
        <br />
        <p>Don't worry, we've got you covered. Try our app for a seamless experience.</p>
      </div>
      <div className="flex flex-row  h-[600px] mt-32 ">
        <div
          className="w-1/2 h-full bg-cover bg-center "
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1726476088~exp=1726479688~hmac=affc5dbe3a9d686c54a16eb0dcf54204b19b265ff9528c63b400f92e0a2f11e6&w=740")`,
          }}
        ></div>
        <div className="w-1/2 text-center content-center font-mono text-lg hidden sm:block">
          <p className="font-extrabold text-2xl">Download Now, For ease</p>
          <br />
          <div
            className="w-4/6 h-4/6 mx-auto rounded-2xl shadow-xl hover:rotate-3 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url("https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg?t=st=1726463373~exp=1726466973~hmac=c49043de1b7a2ad8f527ea803fca1c9d566dbcd2376dae01fdc2f37d065b4ed1&w=996")`,
            }}
          >
            <div className="bg-sky-600 h-4/6 w-4/6 relative -translate-y-6 rounded-full shadow-xl shadow-slate-700 flex items-center justify-center">
              <img src="/Logo_1.png" alt="Logo" className="h-52" />
            </div>
            <button className="bg-slate-700 text-white px-6 py-2 rounded mt-4 hover:bg-slate-900">
              Download
            </button>
          </div>

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
