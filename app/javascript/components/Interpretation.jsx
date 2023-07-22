import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import ChatGPT from "./ChatGPT";

function Interpretation({ params }) {
  const [interpretationBody, setInterpretationBody] = useState("");

  useEffect(() => {
    getInterpretation();
  }, []);

  const getInterpretation = async () => {
    const url = `/api/entries/${params.id}/interpretation`;
    const response = await fetch(url);
    const data = await response.json();
    setInterpretationBody(data.body);
  };

  return (
    <section
      className="flex h-full max-h-[90%] w-[35%] max-w-4xl flex-col gap-4 
        bg-white px-8 py-8 shadow-2xl"
    >
      <h1>Interpretation</h1>
      <div>
        <ChatGPT entry_id={params.id} />
        <Link href={`/entries/index/${params.id}`}>Back to Entry</Link>
        <Link href={`/entries/index/${params.id}/interpretation/edit`}>
          Edit Interpretation
        </Link>
      </div>
      <p>{interpretationBody}</p>
    </section>
  );
}

export default Interpretation;
