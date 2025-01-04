import React from 'react';
import Image from "next/image";
import kitten from "../../../public/images/A cute kitten2.webp";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-around py-10 px-5 md:px-10 w-full text-center">
        {/* Contact Information */}
        <div className="mb-1">
          <h1 className="text-3xl font-semibold mt-9 mb-10">Contact Us</h1>
          <div className="flex justify-center">
            <Image
              src={kitten}
              alt="Adorable kitten"
              className="
                w-[85%] sm:w-[75%] md:w-[70%] lg:w-[60%] xl:w-[50%] 
                h-auto rounded-lg shadow-lg
              "
            />
          </div>
          <p className="text-base leading-relaxed mt-6">
            CALL/TEXT: <br />
            (+92-313)-2254939
            <br />
            <br />
            EMAIL: sameerkaleem@gmail.com
            <br />
            <br />
            FAX: +92-313-746-6609
            <br />
            <br />
            Address: North Nazimabad Karachi Pakistan
          </p>
          <h2 className="mt-8 text-xl font-semibold">Connect With Us on Social Media!</h2>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <FaInstagram size="3rem" color="#f535e5" />
            <a href="https://www.instagram.com" target="_blank" className="text-lg font-semibold mt-2">
              Instagram
            </a>
          </div>

          <div className="flex flex-col items-center">
            <FaFacebook size="3rem" color="#3674e7" />
            <a href="https://www.facebook.com" target="_blank" className="text-lg font-semibold mt-2">
              Facebook
            </a>
          </div>

          <div className="flex flex-col items-center">
            <FaDiscord size="3rem" color="#3751e6" />
            <a href="https://www.discord.com" target="_blank" className="text-lg font-semibold mt-2">
              Discord
            </a>
          </div>

          <div className="flex flex-col items-center">
            <FaYoutube size="3rem" color="#f53943" />
            <a href="https://www.youtube.com" target="_blank" className="text-lg font-semibold mt-2">
              Youtube
            </a>
          </div>
        </div>

        {/* Phone Contact */}
        <div className="flex flex-col items-center mt-10">
          <FaPhoneSquareAlt size="3rem" color="#333" />
          <p className="text-lg font-semibold mt-2">
            <a href="tel:+92-313-22549393" className="hover:underline">
              Contact us on: +92-313-2254939
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
