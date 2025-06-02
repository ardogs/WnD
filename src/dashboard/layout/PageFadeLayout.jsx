import { motion } from "framer-motion";

export const PageFadeLayout = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    )
}
