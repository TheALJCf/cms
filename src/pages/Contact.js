import React from 'react';

function Contact() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">If you have a question, feel free to ask!</p>
      <form className="flex flex-col max-w-md mx-auto">
        <input className="border p-2 mb-2" type="text" placeholder="Your Name" />
        <input className="border p-2 mb-2" type="email" placeholder="Your Email" />
        <textarea className="border p-2 mb-2" placeholder="Your Message"></textarea>
        <button className="bg-blue-600 text-white p-2">Submit</button>
      </form>
      <div className="mt-6">
        <p>Contact Number: {/* Add contact number here */}</p>
        <p>Address: 135 Don Julio Gregorio, Novaliches Sauyo</p>
      </div>
    </div>
  );
}

export default Contact;
