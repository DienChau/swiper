import { motion, useAnimation, useScroll } from "framer-motion";

const Header = () => {
    const { scrollY } = useScroll();
    const controls = useAnimation();

    scrollY.on("change", (y) => {
        if (y > 100) {
            controls.start({ opacity: 0, y: -20 });
        } else {
            controls.start({ opacity: 1, y: 0 });
        }
    });

    return (
        <motion.div
            className="border-b-2"
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
        >
            <div className="h-[80px] bg-pink-100 flex justify-between items-center px-[80px]">
                <motion.div className="flex justify-between items-center bg-blue-200 w-full h-full">
                    <span>Stays</span>
                    <span>Stays</span>
                    <span>Stays</span>
                </motion.div>
                <motion.div className="flex justify-between items-center">
                    <span>Stays</span>
                    <span>Stays</span>
                    <span>Stays</span>
                </motion.div>
            </div>
            <motion.div
                className="w-[850px] bg-yellow-100 h-[70px] mx-auto"
                style={{ opacity: 0.5 }}
            ></motion.div>
        </motion.div>
    );
};

export default Header;
