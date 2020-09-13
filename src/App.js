import React, { useState } from 'react';
import Title from './comps/Title';
import UploadImage from './comps/uploadImage';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {

  const [selectedImg, setselectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadImage/>
      <ImageGrid setselectedImg={setselectedImg} />
     {selectedImg && <Modal selectedImg={selectedImg} setselectedImg={setselectedImg} /> }
    </div>
  );
}

export default App;
