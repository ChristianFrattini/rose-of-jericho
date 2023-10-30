import './nav.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
//import { ReactComponent as RoseLogo } from '../../../assets/icons/rose_of_jericho_svg.svg'

const Nav =()=>{
    return (
        <Fragment>
        <div className="navigation">
          <Link className="title-container" to='/'>
              <h2>The Rose of Jericho</h2>
          </Link>
            <div className='links-container'>
            <Link className='link' to='purchase'>
                    Purchase
                </Link>
                <Link className='link' to='contactus'>
                    Contact us
                </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>
    )
}


export default Nav