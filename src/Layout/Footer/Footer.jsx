import Logo from "../Header/Logo";

function Footer() {
  return (
    <div className=" text-black py-5 border-1 border-stone-300 mt-5 ">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Logo />
            <p className="mt-4 text-sm text-gray-400">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="w-80 md:w-1/3 flex gap-5 justify-between">
            <ul>
              <h2 className="font-semibold text-lg">About</h2>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                How it works
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Featured
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Partnership
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Business Relation
              </li>
            </ul>
            <ul>
              <h2 className="font-semibold text-lg">Community</h2>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Events
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Blog
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Podcast
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Invite a friend
              </li>
            </ul>
            <ul>
              <h2 className="font-semibold text-lg">Socials</h2>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Discord
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Instagram
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Twitter
              </li>
              <li className="p-1 hover:text-gray-700 hover:cursor-pointer transition duration-200">
                Facebook
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 mt-6 text-sm flex justify-between items-center">
          <div>©2022 MORENT. All rights reserved</div>
          <div className="flex gap-6">
            <div>Privacy & Policy</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
