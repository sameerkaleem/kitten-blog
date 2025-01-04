import React from "react";
import Image from "next/image";
import kitten from "../../../public/images/A cute kitten1.webp"; // Update the path based on where your kitten image is located

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mt-10">About Us</h1>
      <p className="text-center text-lg mt-4 text-gray-600">
        Welcome to the Kitten Blog! 🐾 We&apos;re here to share our unconditional
        love for kittens, their adorable antics, and everything you need to know
        about caring for your furry companions.
      </p>
      <br />

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

      <br />

      <div>
        <p className="text-center text-lg text-gray-600">
          At Kitten Blog, we believe that every kitten deserves a loving home
          and the best care possible. Our mission is to educate and inspire cat
          lovers by providing insights into kitten behavior, health, and
          training.
        </p>
      </div>

      <br />

      <div>
        <p className="text-center text-lg text-gray-600">
          Whether you&apos;re a seasoned cat owner or considering adopting your first
          kitten, our blog is your go-to resource for practical tips,
          heartwarming stories, and expert advice.
        </p>
      </div>

      <br />

      <div>
        <p className="text-center text-lg text-gray-600">
          Thank you for joining us on this journey. Together, let&apos;s celebrate
          the joy and companionship that kittens bring into our lives!
        </p>
      </div>
    </div>
  );
};

export default About;
