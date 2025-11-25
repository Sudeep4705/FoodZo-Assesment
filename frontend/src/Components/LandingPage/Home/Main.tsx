import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { motion } from "motion/react"
import Cards from './Cards';
export default function Main() {
    return (
        <>
            <div className="main flex justify-center items-center flex-col h-[600px] relative">
                <motion.div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-red-500 opacity-70" initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                    <LocalPizzaIcon sx={{ fontSize: 70 }} />
                </motion.div>
                <motion.div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-orange-300 opacity-70" initial={{ x: 150 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                    <RestaurantMenuIcon sx={{ fontSize: 70 }} />
                </motion.div>
                <motion.div className="icons mb-4" whileTap={{ rotateZ: 20 }} >
                    <FastfoodIcon className="text-red-500" sx={{ fontSize: 80 }} />
                </motion.div>
                <div className="section1 mb-6">
                    <motion.h2 className="text-5xl text-red-400 text-center font-bold drop-shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
                        Better food for more people
                    </motion.h2>
                </div>
                <div className="section2 text-center max-w-xl">
                    <motion.p className="text-gray-500 text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
                        For over a decade, we’ve enabled our customers to discover new tastes,
                        delivered right to their doorstep.
                    </motion.p>
                </div>
                <div className="section3 w-full flex justify-center mt-10 px-4">
                    <div className="bg-neutral-100 w-full max-w-4xl rounded-3xl
                    flex flex-col sm:flex-row justify-center items-center
                    py-6 sm:py-8 px-4 gap-6">
                <div className="text-center">
                            <h1 className="text-gray-700 text-2xl sm:text-3xl font-bold">
                                3,00,000+
                            </h1>
                            <p className="text-gray-600 text-lg">restaurants</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-gray-700 text-2xl sm:text-3xl font-bold">
                                800+
                            </h1>
                            <p className="text-gray-600 text-lg">cities</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-gray-700 text-2xl sm:text-3xl font-bold">
                                3 billion+
                            </h1>
                            <p className="text-gray-600 text-lg">orders delivered</p>
                        </div>

                    </div>
                </div>
            </div>
             <Cards/>
        </>

    );
}
