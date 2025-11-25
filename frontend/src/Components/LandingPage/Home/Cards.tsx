import { motion } from "motion/react";


export default function Cards() {
    const cardVariants = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 }
    };

    return (
        <>
         <div className="w-full max-w-6xl mx-auto px-4 py-10 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

         
            <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-lg
                           hover:shadow-2xl transition-all duration-300
                           hover:-translate-y-2 cursor-pointer"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.03 }}
            >
                <div className="h-[220px] overflow-hidden">
                    <img src="Images/food1.jpg" 
                         className="w-full h-full object-cover hover:scale-110 transition-all duration-500" />
                </div>
                <div className="p-5">
                    <h2 className="text-red-500 text-2xl font-semibold mb-2">Hot Sizzling Veg Platter</h2>
                    <p className="text-gray-600 leading-relaxed">
                       A rich medley of fresh vegetables and herbs cooked on high flame, served hot and aromatic.
                    </p>
                </div>
            </motion.div>

         
            <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-lg
                           hover:shadow-2xl transition-all duration-300
                           hover:-translate-y-2 cursor-pointer"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.03 }}
            >
                <div className="h-[220px] overflow-hidden">
                    <img src="Images/food2.jpg" 
                         className="w-full h-full object-cover hover:scale-110 transition-all duration-500" />
                </div>
                <div className="p-5">
                    <h2 className="text-red-500 text-2xl font-semibold mb-2">Classic Crispy Burger</h2>
                    <p className="text-gray-600 leading-relaxed">
                       A juicy, crispy patty layered with fresh veggies and sauces, packed inside a soft toasted bun.
                    </p>
                </div>
            </motion.div>

        
            <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-lg
                           hover:shadow-2xl transition-all duration-300
                           hover:-translate-y-2 cursor-pointer"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.03 }}
            >
                <div className="h-[220px] overflow-hidden">
                    <img src="Images/food4.jpg" 
                         className="w-full h-full object-cover hover:scale-110 transition-all duration-500" />
                </div>
                <div className="p-5">
                    <h2 className="text-red-500 text-2xl font-semibold mb-2">South Indian Meal Plate</h2>
                    <p className="text-gray-600 leading-relaxed">
                       A wholesome traditional meal with rice, curry, sides, pickles and classic comfort flavors.
                    </p>
                </div>
            </motion.div>
        </div>

         
        </>
       
    );
}
