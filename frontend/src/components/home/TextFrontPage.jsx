import React from 'react';

function TextFrontPage() {
  return (
    <div className="flex flex-row  h-[600px] m-10 ">
      <div className="w-1/2 text-center content-center font-mono text-lg hidden sm:block">
        <p className="font-bold">Welcome to Anti-Corrupto</p>
        <br />
        <p>Explore our blockchain-powered services, ensuring top security and transparency.</p>
        <br />
        <p>
          From traffic management to land registration and public tenders, we use blockchain to
          provide efficient solutions across various sectors.
        </p>
        <br />
        <p>
          Our team is here to support you, ensuring a seamless experience as we grow together and
          drive progress in our country.
        </p>
      </div>
      <div
        className="w-1/2 h-full bg-cover bg-center "
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/data-points-concept-illustration_114360-2194.jpg?t=st=1726477041~exp=1726480641~hmac=1434528543077cc71e2c85e5da6f71a155a216fd398e1a1fee27c15203bf635b&w=740")`,
        }}
      ></div>
    </div>
  );
}

export default TextFrontPage;
