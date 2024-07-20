"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/public/marketing database.png";
import img2 from "@/public/ecommers2.png";
import img3 from "@/public/webdesign .png";
import my1 from "@/public/1.png";
import my2 from "@/public/2 (1).png";
import my3 from "@/public/3 (1).png";
import my4 from "@/public/mob-new.png";
import my5 from "@/public/4 (1).png";
import my6 from "@/public/5 (1).png";
import my7 from "@/public/6 (1).png";
import img4 from "@/public/replace old image.jpg";
import img5 from "@/public/thinking.png";
import img6 from "@/public/disk.png";
import img7 from "@/public/FAQ.png";
import img8 from "@/public/Like_A_Boss_Logo_04.png";

export default function Home() {
  return (
    <div>
      <div></div>
      <div className="bg-[#333333] px-7 pt-10 pb-36 md:flex md:px-14 md:space-x-8">
        <div className="md:w-[45%]">
          <h2 className="text-4xl text-white  font-extrabold md:text-5xl">
            PROMOTE YOUR BUSINESS TO 100,000+ PEOPLE
          </h2>
          <p className=" text-3xl font-neon font-bold text-[#FFC600] mt-9">
            Launch "bulk marketing" campaign in a few simple steps.
          </p>
          <button className="bg-[#FFC600]  px-4 py-2 rounded-full mt-5 font-semibold hover:bg-white">
            Get Leads
          </button>
        </div>
        <div className="hidden md:block md:w-[55%]">
          <Image src={img8} width={700} height={700} alt="bos" />
        </div>
      </div>
      <div className="px-5">
        <div className="flex justify-center items-center mt-4">
          <p className="-mt-3">
            <span className="md:hidden">_________ </span>
            <span className="hidden md:block">
              __________________________________
            </span>
          </p>
          <h2 className="text-4xl font-extrabold text-center">
            ABOUT <span className="text-[#FFC600]">LEADPLUS</span>
          </h2>
          <p className="-mt-3">
            <span className="md:hidden">_________ </span>
            <span className="hidden md:block">
              _________________________________
            </span>
          </p>
        </div>
        <p className="font-bold text-center mt-8 w-[94%] mx-auto">
          Are you looking to reach a large number of people with your next
          marketing campaign? It’s no secret that bulk marketing to a targeted
          set of audience is the fastest way to get new clients. When 100
          potential customers see your Ad, you may get few customers. But when
          10,000 prospects see your Ad, you will get many customers. This is the
          rule of marketing. This is where LeadPlus can help. We are a
          specialist digital marketing agency that helps businesses with social
          media advertising, bulk promotions, website design and online
          reputation management.
        </p>
        <p className="font-bold text-center mt-3 w-[94%] mx-auto">
          Are you looking to reach a large number of people with your next
          marketing campaign? It’s no secret that bulk marketing to a targeted
          set of audience is the fastest way to get new clients. When 100
          potential customers see your Ad, you may get few customers. But when
          10,000 prospects see your Ad, you will get many customers. This is the
          rule of marketing. This is where LeadPlus can help. We are a
          specialist digital marketing agency that helps businesses with social
          media advertising, bulk promotions, website design and online
          reputation management.
        </p>
      </div>
      <div className="md:flex md:px-20 md:mt-14">
        <div className="mt-10 px-5 text-center md:mt-0">
          <Image
            src={img1}
            width={500}
            height={500}
            alt="img_1"
            className="size-28 mx-auto transition-all duration-700  hover:rotate-[360deg]"
          />
          <h2 className="font-bold text-xl">B2B & B2C Database</h2>
          <p className="font-semibold">
            Get 100's of new leads every month. We offer fresh database of
            business owners and HNI's from every major city and category.
          </p>
        </div>
        <div className="mt-6 px-5 text-center md:mt-0">
          <Image
            src={img2}
            width={500}
            height={500}
            alt="img_1"
            className="w-40 mx-auto transition-all duration-700  hover:rotate-[360deg]"
          />
          <h2 className="font-bold text-xl">Social Marketing</h2>
          <p className="font-semibold">
            96% of online buyers are active on social media. Do you have
            something to sell? Why wait then? Promote your Ads to lakhs of
            buyers using targeted social media campaigns.
          </p>
        </div>
        <div className="mt-10 px-5 text-center md:mt-0">
          <Image
            src={img3}
            width={500}
            height={500}
            alt="img_1"
            className="w-32 mx-auto transition-all duration-700  hover:rotate-[360deg]"
          />
          <h2 className="font-bold text-xl">Google Reviews</h2>
          <p className="font-semibold">
            Google Reviews are a symbol of trust. We’ll post positive reviews
            with 5-star ratings for your business so you can convert more leads
            with no extra effort.
          </p>
        </div>
      </div>

      <div className="md:flex md:px-20 md:mt-14">
        <div className="px-5 mt-8 md:w-[45%]">
          <h2 className="text-2xl font-bold">
            THE BEST B2B & B2C MARKETING DATABASE PROVIDER - NO COMPARISON!
          </h2>
          <p className="mt-5 font-semibold">
            Target the right audience in your preferred location and category.
            We provide the best B2B and B2C database that can incredibly boost
            the results of your marketing campaign. Download the database in
            Excel format with their details such as name, mobile number, email
            id and location. This is best for bulk Whatsapp, bulk email,
            telecalling and even custom Facebook Ads, Instagram Ads and Google
            Ads.
          </p>
          <ul className="mt-4">
            <li className="font-semibold">
              All India startups Companies database
            </li>
            <li className="font-semibold">All India Doctors Database</li>
            <li className="font-semibold">
              All India Business Owners Database
            </li>
            <li className="font-semibold">All India Jobseekers Database</li>
            <li className="font-semibold">
              All India Directors / CEOs / CFOs Database
            </li>
            <li className="font-semibold">All India Amazon sellers Database</li>
          </ul>
        </div>

        <div className="mt-10 md:w-[55%] md:mt-20">
          <div className=" relative group">
            <div className="w-4/5 transition-all mx-auto duration-500 scale-100 group-hover:scale-105 p-4 text-2xl  bg-black text-white">
              <p>
                <span className="text-[#FFC600] font-bold">EXACTLY</span> WHAT
                YOU NEED TO RAECH LOCAL CUSTOMERS EXACTLY{" "}
                <span className="text-[#FFC600] font-bold">WHAT</span> YOU NEED
                TO CONVERT MORE LEADS EXACTLY WHAT{" "}
                <span className="text-[#FFC600] font-bold">YOU</span> NEED TO
                MINIMIZE YOUR BUDGET EXACTLY WHAT YOU NEED TO{" "}
                <span className="text-[#FFC600] font-bold">GROW</span> YOUR
                BUSINESS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[550px] md:mt-[100px] w-full ">
        <div className="bg-cover  bg-black/90 bg-blend-overlay opacity-85 bg-fixed  bg-no-repeat h-[2300px] bg-hero-pattern md:h-[900px]">
          <div className="md:pt-5">
            <p className=" text-center text-4xl text-white  font-extrabold">
              AMAZING<span className="text-[#FFC600]"> FEATURES</span>
            </p>
            <p className="items-center text-white flex justify-center font-bold text-center mt-3">
              Let’s work together and make 2024 your best sales year ever. But
              we need to start now!
            </p>
          </div>
          <div className="md:flex md:px-14">
            <div>
              <motion.div
                initial={{ x: -40 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-bold mt-9  w-5/6 mx-auto text-white "
              >
                <h1 className="text-xl text-center px-1">
                  B2B and B2C database
                </h1>
                <p className="w-4/5 mx-auto">
                  Every growing business needs a growing list of leads. We'll
                  provide you the best database so you can generate more
                  qualified leads.
                </p>
                <Image
                  src={my1}
                  width={500}
                  height={500}
                  alt="tr"
                  className="size-20 mx-auto transition-all duration-500 hover:rotate-[360deg]"
                />
              </motion.div>
              <motion.div
                initial={{ x: -40 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-bold mt-9  w-5/6 mx-auto text-white"
              >
                <h1 className="text-xl text-center px-1">Social media Ads</h1>
                <p className="w-4/5 mx-auto">
                  Post highly engaging Ads on Facebook, Instagram, LinkedIn,
                  Twitter and Quora – get more traffic and sales.
                </p>
                <Image
                  src={my2}
                  width={500}
                  height={500}
                  alt="tr"
                  className="size-20 mx-auto transition-all duration-500 hover:rotate-[360deg]"
                />
              </motion.div>
              <motion.div
                initial={{ x: -40 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-bold mt-9  w-5/6 mx-auto  text-white"
              >
                <h1 className="text-xl text-center px-1">Pay per click Ads</h1>
                <p className="w-4/5 mx-auto">
                  Whether you want to bring back your recent website visitors or
                  generate new leads on Google, Bing and YouTube, PPC is the
                  best option.
                </p>
                <Image
                  src={my3}
                  width={500}
                  height={500}
                  alt="tr"
                  className="size-20 mx-auto transition-all duration-500 hover:rotate-[360deg]"
                />
              </motion.div>
            </div>

            <div className="mt-20 md:w-[60%]">
              <Image
                src={my4}
                width={300}
                height={1000}
                alt="ph"
                className="w-auto h-96 mx-auto md:w-full"
              />
            </div>

            <div>
              <motion.div
                initial={{ x: 40 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-bold mt-9  w-5/6 mx-auto text-white"
              >
                <h1 className="text-xl text-center px-1">Website Design</h1>
                <p className="mt-2">
                  Do you need a quick one-page website? Or need an ecommerce
                  site? We design beautiful websites that will impress your
                  visitors at first glance.
                </p>
                <Image
                  src={my5}
                  width={500}
                  height={500}
                  alt="tr"
                  className="size-20 mx-auto transition-all duration-500 hover:rotate-[360deg]"
                />
              </motion.div>
              <motion.div
                initial={{ x: 40 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-bold mt-9  w-5/6 mx-auto text-white"
              >
                <h1 className="text-xl text-center px-1">Viral Marketing</h1>
                <p className="mt-2 w-4/5 mx-auto">
                  Let’s make your post go viral on social media. We’ll share
                  your promotional post to our 1,30,000 real followers on
                  Facebook and LinkedIn.
                </p>
                <Image
                  src={my6}
                  width={500}
                  height={500}
                  alt="tr"
                  className="size-20 mx-auto transition-all duration-500 hover:rotate-[360deg]"
                />
              </motion.div>
              <motion.div
                initial={{ x: 40 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="font-bold mt-9  w-5/6 mx-auto text-white "
              >
                <h1 className="text-xl text-center px-1">Bulk email sending</h1>
                <p className="mt-2 w-4/5 mx-auto">
                  Email is the best way to reach corporate level decision makers
                  like Directors and Managers. How to deliver 60,000 emails per
                  month to inbox? Ask us.
                </p>
                <Image
                  src={my7}
                  width={500}
                  height={500}
                  alt="tr"
                  className="size-20 mx-auto transition-all duration-500 hover:rotate-[360deg]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="flex justify-center items-center mt-4">
          <p className="-mt-3">
            <span className="md:hidden">_________ </span>
            <span className="hidden md:block">
              __________________________________
            </span>
          </p>
          <h2 className="text-4xl font-extrabold text-center">Why Us?</h2>
          <p className="-mt-3">
            <span className="md:hidden">_________ </span>
            <span className="hidden md:block">
              _________________________________
            </span>
          </p>
        </div>
        <p className="text-lg font-semibold text-center mt-3">
          LeadPlus services are budget-friendly, delivered super fast – and
          suitable for all types of businesses.
        </p>
        <div className="flex justify-center group w-5/6 mx-auto">
          <div className="h-2 bg-black w-[50%] group-hover:w-[300%] transition-all duration-500"></div>
          <div className="h-2 bg-[#FFC600] w-[50%] "></div>
        </div>
        <div className="md:flex md:px-14 md:mt-10">
          <div className="md:w-[50%]">
            <Image
              src={img4}
              width={600}
              height={600}
              alt="imh"
              className="w-5/6 mx-auto"
            />
          </div>
          <div className="md:w-[50%]">
            <h2 className="font-semibold text-[#333333] font-[Arial] mt-8 text-4xl">
              LOCAL AREA MARKETING
            </h2>
            <p className="font-semibold mt-4 text-lg">
              Imagine you're at a crowded street and you shout "Hey everyone!"
            </p>
            <p className="font-semibold mt-4 text-lg">
              People are less likely to respond. Because you're not specific
              enough.
            </p>
            <p className="font-semibold mt-4 text-lg">
              But instead, what if you say "Hey, any doctor here? What do you
              think will happen?{" "}
            </p>
            <p className="font-semibold mt-4 text-lg">
              The doctor is going to respond. Because you specifically called
              him out.{" "}
            </p>
            <p className="font-semibold mt-4 text-lg">
              It's the same with your marketing message - when you try to
              attract everyone, you end up attracting almost none.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex md:px-14 w-full">
        <motion.div
          initial={{ x: -40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-16 px-10 md:w-[50%]"
        >
          <h2 className="text-3xl font-bold">100% ORGANIC GOOGLE REVIEWS</h2>
          <p className="font-semibold mt-7">
            Google reviews is word-of-mouth marketing on steroids. A local
            business that is rated 5/5 on Google easily converts more visitors
            than a business that has a Google rating of just 3 out of 5. Getting
            more 5-star ratings is one of the most powerful strategies to boost
            your rankings in local search results.
          </p>
          <p className="font-semibold mt-5">
            More reviews means more trust and more 5-star ratings means more
            conversions. When you raise your value on Google, you can raise your
            pricing too. Get the best of both worlds with organic Google
            reviews.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 relative group md:w-[50%] w-4/5 mx-auto px-10"
        >
          <div className="bg-[#FFC600] transition-all duration-500 group-hover:rotate-[90deg]   text-white w-5/6 mx-auto px-4 h-96 py-10">
            <p className="text-2xl">
              E = MC^2 THAT WAS EINSTEIN FORMULA.{" "}
              <span className="font-bold">
                E = MC^2 MORE CONVERSION * MORE CUSTOMERS
              </span>{" "}
            </p>
            <p className="font-bold mt-4 text-2xl">THIS IS LEADPLUS FORMULA</p>{" "}
          </div>
          <div className="bg-white  absolute transition-all duration-1000 -bottom-52 hidden  group-hover:block group-hover:bg-[#FFC600]  group-hover:bottom-0 right-0 left-0   text-white w-5/6 mx-auto px-4 h-96 py-10">
            <p className="text-2xl font-bold text-center mt-10">
              BEHIND EVERY SUCCESSFUL MAN THERE IS A DIGITAL MARKETING BUSINESS
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 w-full">
        <div className="bg-cover  bg-black/90 bg-blend-overlay opacity-85 bg-fixed  bg-no-repeat h-[550px] bg-hero-pattern md:h-[200px]">
          <div>
            <p className="text-white text-4xl text-center pt-10 font-bold w-5/6 mx-auto ">
              Increase Your Sales Using Bulk Marketing, Viral Marketing, and
              Trust Marketing - Put the Odds in your Favour!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Image
          src={img5}
          width={500}
          height={500}
          alt="think"
          className="size-48 mx-auto"
        />
        <h2 className="text-4xl mt-3 font-extrabold text-center">
          I <span className="text-[#FFC600]">NEED LEADPLUS</span> TO
        </h2>
        <p className="mt-5 text-3xl font-semibold px-5">
          Design a professional website for my business so I can promote my
          offers to a wider audience.
        </p>
      </div>

      <div>
        <h2 className="text-center text-4xl mt-10 font-bold">
          Choose Your Plan
        </h2>

        <div className="md:flex md:space-x-6 md:px-14 md:mt-16">
          <motion.div
            whileInView={{ rotateY: 360 }}
            transition={{ duration: 1.5 }}
            className="w-5/6 mx-auto border border-[#FCC600] shadow-xl hover:shadow-2xl"
          >
            <div className="bg-[#269DD6] py-7 ">
              <Image
                src={img6}
                width={400}
                height={400}
                alt="disk"
                className="size-20 mx-auto "
              />
              <h2 className="text-center text-3xl font-bold text-white">
                B2C Database
              </h2>
            </div>
            <div>
              <h2 className="text-[#269DD6] text-4xl font-bold text-center pt-6">
                Rs.1999 <span className="text-lg">onwards</span>
              </h2>
              <ul className="text-center mt-7">
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  Online Shoppers data
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Cars Owners database
                </li>
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  High Income people data
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Demat account holders
                </li>
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  Working Employees
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Flight travellers
                </li>
                <li className="py-3 font-bold  border-2 border-b-0 border-x-0 ">
                  Insurance Holders data
                </li>
              </ul>
            </div>
            <div className=" mx-auto -mb-5 w-1/3">
              <button className="font-bold rounded-full px-4 py-3    bg-[#FFC600]">
                Get Database
              </button>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ rotateY: 360 }}
            transition={{ duration: 1.5 }}
            className="md:mt-0 mt-8 w-5/6 mx-auto border border-[#FCC600] shadow-xl hover:shadow-2xl"
          >
            <div className="bg-[#FFC600] py-7 ">
              <Image
                src={img6}
                width={400}
                height={400}
                alt="disk"
                className="size-20 mx-auto "
              />
              <h2 className="text-center text-3xl font-bold text-white">
                B2C Database
              </h2>
            </div>
            <div>
              <h2 className="text-[#269DD6] text-4xl font-bold text-center pt-6">
                Rs.1999 <span className="text-lg">onwards</span>
              </h2>
              <ul className="text-center mt-7">
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  Online Shoppers data
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Cars Owners database
                </li>
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  High Income people data
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Demat account holders
                </li>
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  Working Employees
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Flight travellers
                </li>
                <li className="py-3 font-bold  border-2 border-b-0 border-x-0 ">
                  Insurance Holders data
                </li>
              </ul>
            </div>
            <div className=" mx-auto -mb-5 w-1/3">
              <button className="font-bold rounded-full px-4 py-3    bg-[#FFC600]">
                Get Database
              </button>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ rotateY: 360 }}
            transition={{ duration: 1.5 }}
            className="md:mt-0 mt-8 w-5/6 mx-auto border border-[#FCC600] shadow-xl hover:shadow-2xl"
          >
            <div className="bg-[#FFC600] py-7 ">
              <Image
                src={img6}
                width={400}
                height={400}
                alt="disk"
                className="size-20 mx-auto "
              />
              <h2 className="text-center text-3xl font-bold text-white">
                B2C Database
              </h2>
            </div>
            <div>
              <h2 className="text-[#269DD6] text-4xl font-bold text-center pt-6">
                Rs.1999 <span className="text-lg">onwards</span>
              </h2>
              <ul className="text-center mt-7">
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  Online Shoppers data
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Cars Owners database
                </li>
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  High Income people data
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Demat account holders
                </li>
                <li className="py-3 font-bold  border-2 border-x-0 ">
                  Working Employees
                </li>
                <li className="py-3 font-bold  border-t-0 border-x-0 ">
                  Flight travellers
                </li>
                <li className="py-3 font-bold  border-2 border-b-0 border-x-0 ">
                  Insurance Holders data
                </li>
              </ul>
            </div>
            <div className=" mx-auto -mb-7 w-1/3">
              <button className="font-bold rounded-full px-4 py-3    bg-[#FFC600]">
                Promote Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-extrabold text-center">OUR - FAQ</h2>
        <p className="font-semibold text-center">
          Quickly find out if we've already addressed your queries.
        </p>
        <div className="md:flex md:px-14 md:mt-10">
          <div className="md:w-[50%]">
            <Image src={img7} width={600} height={400} alt="faq" />
          </div>
          <div className="md:w-[50%]">
            <div className="w-5/6 mx-auto ">
              <h2
                style={{
                  background:
                    "linear-gradient(45deg, rgba(250, 198, 37, 0.9), rgba(244, 151, 7, 0.9))",
                }}
                className=" py-4 text-xl text-white font-semibold px-3"
              >
                How Authentic is your Database?
              </h2>
              <p className="bg-slate-50 mt-3 px-3 pt-2  font-bold">
                We have collected this data from various sources and the
                Internet and the accuracy varies as per the category and source.
                But we always give you the latest. We usualy hit an accuracy of
                80% to 90% and same customers have bought from us repeatedly.
              </p>
            </div>
            <div className="w-5/6 mx-auto mt-4 ">
              <h2
                style={{
                  background:
                    "linear-gradient(45deg, rgba(250, 198, 37, 0.9), rgba(244, 151, 7, 0.9))",
                }}
                className=" py-4 text-xl text-white font-semibold px-3"
              >
                Can we use your Data for spamming or Unsolicited phone calls?
              </h2>
              <p className="bg-slate-50 mt-3 px-3 pt-2  font-bold">
                No, our data is for Business promotion purpose only. You can not
                send Unsolicited emails to these data. Please note that you are
                responsible for usage of these data. We will not be held
                responsible for any legal matter or Loss occur to you due to
                usage of this data. If USER (Purchaser) is doing any illegal
                activity or spamming then any third party has rights to take
                action against the USER (i.e. you).
              </p>
            </div>
            <div className="w-5/6 mx-auto mt-4 ">
              <h2
                style={{
                  background:
                    "linear-gradient(45deg, rgba(250, 198, 37, 0.9), rgba(244, 151, 7, 0.9))",
                }}
                className=" py-4 text-xl text-white font-semibold px-3"
              >
                Can you Provide me some Sample Database ?
              </h2>
              <p className="bg-slate-50 mt-3 px-3 pt-2  font-bold">
                We try as much as possible not to disturb our leads. This also
                helps maintain the freshness and authenticity of our data
              </p>
            </div>
            <div className="w-5/6 mx-auto mt-4 ">
              <h2
                style={{
                  background:
                    "linear-gradient(45deg, rgba(250, 198, 37, 0.9), rgba(244, 151, 7, 0.9))",
                }}
                className=" py-4 text-xl text-white font-semibold px-3"
              >
                After payment, when will I receive the database?
              </h2>
              <p className="bg-slate-50 mt-3 px-3 pt-2  font-bold">
                Just inform us after you've made the payment. Once it's credited
                to our account, you will receive the data within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(45deg, rgba(250, 198, 37, 0.9), rgba(244, 151, 7, 0.9))",
        }}
        className="mt-20"
      >
        <h2 className="text-white text-2xl text-center pt-7">
          Get in{" "}
          <span className="text-black text-4xl font-bold">Touch with us</span>
        </h2>
        <form
          action=""
          className="mt-8 px-10 w-full md:flex md:space-x-8 md:px-24 md:pb-10"
        >
          <div className="md:w-[50%]">
            <div>
              <label
                htmlFor=""
                className="block text-xl text-white font-semibold"
              >
                Your name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Name"
                className="w-full  rounded font-bold text-lg px-3 py-2 bg-white outline-none text-black"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor=""
                className="block text-xl text-white font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email id"
                className="w-full  rounded font-bold text-lg px-3 py-2 bg-white outline-none text-black"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor=""
                className="block text-xl text-white font-semibold"
              >
                Mobile No.
              </label>
              <input
                type="tel"
                name=""
                id=""
                placeholder="Enter 10-digit mobile no."
                className="w-full  rounded font-bold text-lg px-3 py-2 bg-white outline-none text-black"
              />
            </div>
          </div>
          <div className="md:w-[50%]">
            <div className="mt-6">
              <label
                htmlFor=""
                className="block text-xl text-white font-semibold"
              >
                Message
              </label>
              <textarea
                placeholder="Enter Your Message"
                rows={5}
                className="w-full resize-none rounded font-bold text-lg px-3 py-2 bg-white outline-none text-black"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-white py-1 px-3 rounded ">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="pt-10 pb-5 text-center font-bold text-lg w-full">
        <div className="">
          <p>vimal.leadplus@gmail.com</p>
          <p>+91 7354939792</p>
        </div>
        <div className="mt-3">
          <p>Copyright @ 2024 LeadPlus. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
