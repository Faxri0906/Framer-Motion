import { motion } from "framer-motion";
export default function Works() {
    return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0, backgroundColor: "red"}}>
      <div className="text-5xl py-96 container">
        <h1 id="topText" className="font-bold text-8xl w-[100000px] text-nowrap">
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
        </h1>
        <div className="my-4">
          <img src="https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
        <h1 id="bottomText" className="font-bold text-8xl w-[100000px] text-nowrap">
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
          WE CREATE WE EXPLORE WE DESIGN WE DEVELOP WE CREATE WE EXPLORE WE DESIGN WE DEVELOP
        </h1>
      </div>
    </motion.div>
    );
};