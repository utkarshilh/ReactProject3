import React from 'react';
// import Alert from './Alert'
import { Notes } from './Notes';
// import Noteitem from './Noteitem'

const Home = (props) => {
  const { showAlert } = props
  return (
    <div>

      <Notes showAlert={showAlert} />
    </div>
  );
}
export default Home;


