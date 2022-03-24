import css from './NavBar.module.css'

import React from 'react'

const NavBar = () => {

  const links = [
    { path: "/", title: "Welcome"},
    { path: "/cat", title: "Cat"},
    { path: "/dog", title: "Dog"},
    { path: "/fish", title: "Fish"}
  ]

  return (
    <ul className={css.navBar}>
      { links.map((element, index) => {

        const liClass = css.navBarItem + ' ' + (window.location.pathname === element.path ? css.navBarActive : '')
        const anchorClass = (window.location.pathname === element.path ? css.navBarActive : '')

        return (<li
          key={index}
          className={liClass}>
          { (window.location.pathname === element.path) ?
            <span>{element.title}</span>
            : <a className={anchorClass} href={element.path}>{element.title}</a>
          }
        </li>)
        })
      }
    </ul>
  )
}

export default NavBar