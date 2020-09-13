import React from 'react';
import {motion} from 'framer-motion'

const Modal = ({selectedImg, setselectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('modal-img')){
            setselectedImg(null);
        }
    }

    return (
        <motion.div className='modal-img' onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt="ImageEnlarged" 
            initial={{y : "-100vh"}}
            animate={{y : 0}}
             />
        </motion.div>
    )
}

export default Modal;