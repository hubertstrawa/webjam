import React, {useEffect} from "react"
import { Link } from "gatsby"
import logoSvg from "../assets/logo.svg"
import logoDarkSvg from "../assets/logoDark.svg"
import logoSpotify from "../assets/spotify.png"

import { rhythm } from "../utils/typography"
import layoutStyles from '../styles/layout.module.css'
import '../styles/global.css';

const Layout = ({ location, title, children }) => {
  useEffect(() => {  
  }, [])

  // const rootPath = `${__PATH_PREFIX__}/`
  let header
  //location.pathname === rootPath
  if (typeof window !== 'undefined') {
      if (localStorage.getItem('theme') === 'light'){
        header = (
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              <img alt="Webjam Podcast Logo" className={layoutStyles.logo} src={logoSvg}/>
              {/* {title} */}
            </Link>
        )
    } else {
      header = (
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <img alt="Webjam Podcast Logo" className={layoutStyles.logo} src={logoDarkSvg}/>
          </Link>
      )
    }
  }
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        color: 'var(--textNormal)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div>
        {/* <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className={layoutStyles.headerWrap}>
              <header>{theme === 'dark' || typeof window !== 'undefined' ? <Link className={layoutStyles.logoWrapper} to='/'><img alt="Webjam Logo" className={layoutStyles.logo} src={logoDarkSvg}/></Link> : <Link className={layoutStyles.logoWrapper} to='/'><img alt="Webjam Logo" className={layoutStyles.logo} src={logoSvg}/></Link>}</header>
              <div>
                <label className="theme-switch" htmlFor="checkbox">
                <input
                  id="checkbox"
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />
                <div className="slider round"></div>
              </label>
              </div>
            </div>
          )}
        </ThemeToggler> */}
        <header className={layoutStyles.headerWrap}>
          <Link className={layoutStyles.logoWrapper} to='/'>
            <img alt="Webjam Podcast Logo" className={layoutStyles.logo} src={logoDarkSvg}/>
          </Link>
          <Link className={layoutStyles.logoWrapper} to='https://open.spotify.com/show/203qO6W0A5RUdLLjFzBsWU?si=FIPcZkblR36fgxtCAqYK-g'><img alt="Webjam Podcast Spotify" style={{width: '100px'}} src={logoSpotify}/></Link>
        </header>
      </div>
      <main>{children}</main>
      <footer style={{marginTop: 'auto', textAlign: 'center'}}>
        © {new Date().getFullYear()} <a href="mailto:hubertstrawa@gmail.com">hubertstrawa@gmail.com</a>, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout