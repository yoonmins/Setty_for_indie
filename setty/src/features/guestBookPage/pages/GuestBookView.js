import React, { useState } from "react";
import './guest-book.css';

function GuestBookView() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ fontSize:"8em"}}>방명록</h1>
      <InputForm onAddEntry={handleAddEntry} />
      <GuestBookList entries={entries} />
    </div>
  );
}

function InputForm({ onAddEntry }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    onAddEntry({ name, message, date: new Date().toLocaleString() });
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", fontSize:"5em"}}>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "2vw", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ marginRight: "1vw", padding: "5px" }}
      />
      <button type="submit" style={{ padding: "5px 10px" }}>작성</button>
    </form>
  );
}

function GuestBookList({ entries }) {
  return (
    <div>
      {entries.length === 0 ? (
        <p style={{fontSize:"5em"}}>아직 작성된 메시지가 없습니다!</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} style={{ marginBottom: "10px", textAlign: "left" }}>
            <p style={{fontSize:"5em"}}>
              <strong>{entry.name}</strong> ({entry.date}):
            </p>
            <p style={{fontSize:"5em"}}>{entry.message}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default GuestBookView;