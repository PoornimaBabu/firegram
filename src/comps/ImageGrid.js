import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setselectedImg}) => {
    const { docs } = useFirestore('images');
    console.log("docs:" + docs.url);
    return (
        <div className='img-grid'>
            {docs && docs.map(docs => (
                <motion.div className='img-wrap' key={docs.id}
                     onClick={() => setselectedImg(docs.url)}
                     layout
                     whileHover={{opacity:1.0}}
                >
                    <motion.img src={docs.url} alt="Image" 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;