import React from 'react';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import NewsletterBox from '../Components/NewsletterBox';

const About = () => {
  return (
		<div>
    <div className="py-20 pt-20 px-6 md:px-16 border-t text-4xl">
      {/* Title */}
         <Title text1={'ABOUT'} text2={' US'}/>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Left Section - Image */}
        <div className="md:w-1/2">
          <img className="w-full max-w-[450px] rounded-lg shadow-lg" src={assets.about_img} alt="About Us" />
        </div>

        {/* Right Section - Text */}
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-4">
            We are a passionate team dedicated to delivering top-notch services and innovative solutions.
            Our goal is to provide outstanding experiences tailored to our customers' needs.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2 text-black">Our Mission</h3>
          <p className="text-lg leading-relaxed mb-4">
            Our mission is to create high-quality products and services that make a difference. 
            We focus on customer satisfaction, innovation, and long-term success.
          </p>
        </div>
      </div>
			<div className='text-2xl  mt-5 py-4'>
					<Title text1={'WHY'} text2={' CHOOSE US'}/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
					{[
						{ title: "Quality Assurance", desc: "We ensure top-tier quality with strict testing, continuous improvement, and precision, delivering reliable, durable, and excellent services that exceed expectations.", icon: "✅" },
						{ title: "Customer Satisfaction", desc: "Your happiness matters most. We provide personalized support, seamless experiences, and trusted service, ensuring every interaction is meaningful and enjoyable.", icon: "💖" },
						{ title: "Innovation & Excellence", desc: "We drive creativity and efficiency, using advanced technology and strategic refinement to deliver unique, high-quality solutions that redefine industry standards.", icon: "🚀" },
					].map((item, index) => (
						<div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all hover:shadow-lg hover:scale-105">
							<div className="text-3xl">{item.icon}</div>
							<h3 className="text-lg font-semibold text-gray-800 mt-3">{item.title}</h3>
							<p className="text-sm text-gray-600 mt-1">{item.desc}</p>
						</div>
					))}
				</div>


    </div>
			<NewsletterBox />
		</div>
  );
};

export default About;
