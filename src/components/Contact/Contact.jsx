import React from 'react'
import Swal from 'sweetalert2';
export default function Contact() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
  
    const [message, setMessage] = React.useState('');

    //email functionality
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://formspree.io/f/{mykey}', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
    
        if (response.ok) {
          alert('Form Submitted');
          Swal.fire({
            icon: 'success',
            title: 'Thanks For Your Message',
            text: 'Your Message has been successfully Sent!',
          });
        } else {
          Swal.fire({
      icon: 'error',
      title: 'Submission Failed',
      text: 'There was an error submitting your form. Please try again later.',
    });
        }
      };


    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Get in touch: 
                        </h1>
                        <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                Karachi, Pakistan
                            </div>
                        </div>

                       

                        <div className="flex items-center mt-2 text-gray-600">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                taqiahmed339@gmail.com
                            </div>

                            
                        </div>

                        <div className="flex items-center mt-2 text-gray-600">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path d="M22.225 0H1.775C.791 0 0 .774 0 1.728v20.543C0 23.226.791 24 1.775 24h20.451C23.208 24 24 23.226 24 22.271V1.728C24 .774 23.208 0 22.225 0zM7.124 20.451H3.726V8.924h3.398v11.527zM5.424 7.351c-1.088 0-1.979-.884-1.979-1.972 0-1.089.891-1.973 1.979-1.973 1.088 0 1.979.884 1.979 1.973 0 1.088-.891 1.972-1.979 1.972zM20.451 20.451h-3.399v-5.604c0-1.337-.026-3.06-1.865-3.06-1.867 0-2.153 1.458-2.153 2.962v5.702h-3.399V8.924h3.263v1.571h.046c.453-.859 1.561-1.764 3.211-1.764 3.433 0 4.068 2.257 4.068 5.195v6.525z" />
                        </svg>
                        </div>

                    </div>

                    <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label for="name" className="hidden">
                                Full Name
                            </label>
                            <input
                                required='true'
                                type="name"
                                name="name"
                                id="name"
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="Full Name"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="email" className="hidden">
                                Email
                            </label>
                            <input
                            required='true'
                                type="email"
                                name="email"
                                id="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Email"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="tel" className="hidden">
                                Number
                            </label>
                            <textarea
                            required='true'
                            maxLength={250}
                                type="text"
                                name="message"
                                id="message"
                                onChange={(e)=>setMessage(e.target.value)}
                                placeholder="your message"
                                className="resize-none h-32 w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
