import FacebookIcon from "../../assets/icons/icon-facebook.svg";
import TwitterIcon from "../../assets/icons/icon-twitter.svg";
import PinterestIcon from "../../assets/icons/icon-pinterest.svg";
import InstagramIcon from "../../assets/icons/icon-instagram.svg";
import { motion } from "framer-motion";

const footerLinks = [
  {
    category: "Features",
    links: [
      { name: "Link shortening", path: "#" },
      { name: "Branded Links", path: "#" },
      { name: "Analytics", path: "#" },
    ],
  },
  {
    category: "Resources",
    links: [
      { name: "Blog", path: "#" },
      { name: "developers", path: "#" },
      { name: "Support", path: "#" },
    ],
  },
  {
    category: "Company",
    links: [
      { name: "About", path: "#" },
      { name: "Our Team", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Contact", path: "#" },
    ],
  },
];

const socialMediaHandles = [
  { link: "#", icon: FacebookIcon },
  { link: "#", icon: TwitterIcon },
  { link: "#", icon: PinterestIcon },
  { link: "#", icon: InstagramIcon },
];

const Footer = () => {
  return (
    <div className="flex  bg-verDarkViolet py-[1.5rem] tablet:py-[3rem] px-[1.5rem] justify-center tablet:justify-normal tablet:px-[6rem]">
      <div className="flex tablet:flex-row flex-col gap-4 flex-1 text-center tablet:text-left">
        <div className="flex-[4] text-white text-[2rem] font-semibold">
          GoVaahan
        </div>
        {footerLinks.map((data, index) => (
          <div className="flex-[2] flex flex-col gap-4" key={index}>
            <div className="text-sm text-white font-bold">{data.category}</div>
            <div className="flex flex-col gap-1">
              {data.links.map((link, index) => (
                <div
                  className="text-sm text-darkGray hover:cursor-pointer hover:text-white"
                  key={index}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex-[2] flex gap-6 justify-center items-start tablet:justify-start">
          {socialMediaHandles.map((data, index) => (
            <motion.img
              src={data.icon}
              alt="icon"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.15,
              }}
              transition={{ scale: { type: "spring", stiffness: 500 } }}
              key={index}
              className="hover:cursor-pointer !w-6 !h-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
