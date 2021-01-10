import React, { useState } from "react";
import "../stylesheets/App.css";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import Header from "./Header";
import apiEmails from "../data/apiEmails.json";

function App() {
  const [emails, setEmails] = useState(apiEmails);
  const [inboxFilter, setInboxFilter] = useState("");
  const [showInbox, setShowInbox] = useState(true);
  const [showEmailId, setShowEmailId] = useState("");

  const handleInboxFilter = () => {
    setInboxFilter(true);
  };

  const handleDeleteFilter = () => {
    setShowInbox(false);
  };

  const handleTextFilter = (data) => {
    setInboxFilter(data.value);
  };

  const handleDeleteEmail = (emailId) => {
    // clean email id
    if (emailId === showEmailId) {
      setShowEmailId("");
    }
    // set email deleted attribute to true
    const email = emails.find((email) => email.id === emailId);
    email.deleted = true;
    setEmails([...emails]);
  };

  //Filter emails by the user input (state)
  // const filterEmails = apiEmails.filter((email) => {
  //   return (
  //     email.fromName.toLowerCase().includes(inboxFilter.toLowerCase()) ||
  //     email.subject.toLowerCase().includes(inboxFilter.toLowerCase) ||
  //     email.body.toLowerCase().includes(inboxFilter.toLowerCase)
  //   );
  // });
  apiEmails.map((email) => {
    return (
      <EmailItem
        from={email.fromName}
        subject={email.subject}
        time={email.date}
        key={email.id}
        id={email.id}
        deleted={email.deleted}
        read={email.read}
        handleDeleteEmail={handleDeleteEmail}
      />
    );
  });

  return (
    <div>
      <Header
        handleInboxFilter={handleInboxFilter}
        handleDeleteFilter={handleDeleteFilter}
        handleTextFilter={handleTextFilter}
      ></Header>
      <p>La usuaria está filtrando por: {inboxFilter}</p>
      <table class="table">{/* <tbody>{filterEmails}</tbody> */}</table>
      <EmailReader></EmailReader>
    </div>
  );
}

export default App;
