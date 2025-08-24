import React from "react";
import Lottie from "lottie-react";
import contact from "../assets/photos/contact.json";
import github2 from "../assets/photos/github2.png";
import linkedin from "../assets/photos/linkedin.png";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "822fa190-5223-4b78-a81e-dd9f0a4a85a8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message sent successfully",
        text: "Thanks for contacting me. I will get back to you soon.",
        icon: "success",
      });
       event.target.reset();
    }else {
  Swal.fire({
    title: "Message not sent",
    text: "Something went wrong. Please try again later.",
    icon: "error",
  });
  }} ;
  return (
    <div className="w-vw bg-black flex flex-row max-md:flex-col gap-10 items-center p-10 mt-2 h-auto max-md:p-3 max-md:gap-3">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-1/2 max-md:w-full"
      >
        <p
          className="text-white text-3xl font-extrabold max-md:text-2xl"
          id="contact"
        >
          Get in touch
        </p>
        <p className="text-white text-xl mb-3">
          Let’s connect and create something amazing together!
        </p>
        <div className="flex flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/hitesh-kandari-240017328/"
            target="_blank"
            className="inline"
          >
            <img src={linkedin} alt="linkedin icon" className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/Hitesh04codebot"
            target="_blank"
            className="inline"
          >
            <img src={github2} alt="GitHub icon" className="w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-row justify-start">
          <Lottie animationData={contact} className="w-[700px] h-[400px] " />
        </div>
      </motion.div>
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-1/2 border-2 border-white rounded-lg h-full p-4 shadow-[0_4px_8px_white] bg-zinc-700 max-md:w-full  "
      >
        <p className="text-4xl font-bold text-white text-center mb-7">
          Contact Me
        </p>
        <div className="mb-4">
          <label
            htmlFor="text"
            className="text-xl text-white font-bold mb-2 block"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter you full name"
            className="border-1 border-b-white block bg-white w-full my-2 p-2 outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-xl text-white font-bold mb-2 block"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter you email address"
            name="email"
            className="border-1 border-b-white block bg-white w-full my-2 p-2 outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-xl text-white font-bold mb-2 block"
          >
            Message
          </label>
          <textarea
            type="textarea"
            rows={4}
            name="message"
            id="message"
            placeholder="Enter you message"
            className="border-1 border-b-white block bg-white w-full my-2 p-2 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 cursor-pointer"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;
