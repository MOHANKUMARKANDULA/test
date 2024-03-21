import React, { useState } from 'react';

function App() {
  // State variables to hold form data, list of contacts, and search query
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);
  const [searchContact, setSearchContact] = useState('');

  // Function to be executed when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
console.log(event)
    // Create a new contact object
    const newContact = {
      name: name,
      phone: phone
    };
    

    // Update the list of contacts with the new contact
    setContacts([...contacts, newContact]);
    

    // Clear the form fields after adding the contact
    setName('');
    setPhone('');

   // Log the new contact (for demonstration purposes)
  console.log('New Contact:', newContact);
};
  // Function to be executed when a contact is deleted
  const handleDelete = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts); //
  };

  // Function to be executed when the search query changes
  const handleSearch = (event) => {
    setSearchContact(event.target.value);
  };

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <div>
      <center>
        <h1>CONTACT BOOK</h1>
        {/* Form with onSubmit event */}
        <form onSubmit={handleSubmit}>
          {/* Name input field */}
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
          <br />
          {/* Phone input field */}
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter your phone number"
          />
          <br />
          {/* Submit button */}
          <button type="submit">submit</button>
        </form>

        {/* Search input field */}
        <input
          type="text"
          value={searchContact}
          onChange={handleSearch}
          placeholder="Search contacts"
        />
        <br />

        {/* Display list of contacts in a table */}
        <h2>Contact List</h2>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>
                  {/* Delete button for each contact */}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}
export default App;
