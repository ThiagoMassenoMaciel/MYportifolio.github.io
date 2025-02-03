import PropTypes from "prop-types";

const Header = ({menu, functionn})=>{
  return(
    <header>
      <ul>
        {menu.map((item,index) => <li style={{cursor:'pointer'}} onClick={functionn[index]} key={index}>{item}</li>)}
      </ul>
    </header>
  )
}

Header.propTypes ={
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
  functionn: PropTypes.arrayOf(PropTypes.func).isRequired,
}

/*

const Header = ({menu, functionn})=>{
  return(
    <header>
      <ul>
        {menu.map((item,index) => <li onClick={functionn[index]} key={index}>{item}</li>)}
      </ul>
    </header>
  )
}

Header.propTypes ={
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
  functionn: PropTypes.arrayOf(PropTypes.func).isRequired,
}


*/
export default Header