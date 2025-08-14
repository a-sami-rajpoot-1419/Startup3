import { useState, useEffect } from 'react'
import { Container } from './Container';

export default function Navbar(){
  const [open, setOpen] = useState(false)
  useEffect(()=>{ document.body.style.overflow = open ? 'hidden' : ''; return ()=>{ document.body.style.overflow=''; } },[open])
  const links = [
    {href:'#home', label:'Home'},
    {href:'#features', label:'Features'},
    {href:'#pricing', label:'Pricing'},
    {href:'#blog', label:'Blog'}
  ]
  return (
    <nav className="navbar">
      <Container className="nav-container">
        <ul className="nav-menu">
          {links.map(l=> <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <div className="nav-right">
          <a href="#" className="nav-icon"><i className="fas fa-globe"></i></a>
          <a href="#" className="nav-special">Be</a>
          <button className="nav-hamburger" aria-label="Toggle menu" aria-expanded={open} onClick={()=> setOpen(o=>!o)}>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
        <div className={"nav-mobile-overlay" + (open?" mobile-active":"")}>
          <ul className="nav-mobile-menu" onClick={()=> setOpen(false)}>
            {links.map(l=> <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
