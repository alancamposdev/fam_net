//components
import {Button} from '@mui/material';

const Header = () => {

  
  return(
    <header className="header">
     
      <div className="header_container">

        <div>
          <a href="#">FamNet</a>
        </div>

        <div>
        <Button variant="contained">Postar</Button>
          <span>img1</span>
          <span>img2</span>          
        </div>

      </div>
          
    </header>
  );
};
export default Header;