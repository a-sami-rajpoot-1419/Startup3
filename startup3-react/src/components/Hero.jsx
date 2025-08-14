import { useState, useEffect, useCallback } from 'react'
import { Section } from './Container';

export default function Hero(){
  const slides = 5
  const [active, setActive] = useState(0)
  const next = useCallback(()=> setActive(a => (a+1)%slides),[slides])
  const prev = useCallback(()=> setActive(a => (a-1+slides)%slides),[slides])
  useEffect(()=>{ const t = setInterval(next, 4000); return ()=> clearInterval(t)},[next])
  return (
    <Section id="home" className="hero">
      <div className="hero-arrows">
        <div className="hero-arrow hero-arrow-left" tabIndex={0} aria-label="Previous" onClick={prev} onKeyDown={e=> (e.key==='Enter'||e.key===' ') && prev()}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="hero-arrow hero-arrow-right" tabIndex={0} aria-label="Next" onClick={next} onKeyDown={e=> (e.key==='Enter'||e.key===' ') && next()}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-brand">Startup 3</div>
        <h1 className="hero-title">Forget About Code</h1>
        <p className="hero-description">
          Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding.
        </p>
      </div>
      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {Array.from({length: slides}).map((_,i)=>(
          <button key={i} className={"dot" + (i===active?" active":"")} aria-selected={i===active} aria-label={`Go to slide ${i+1}`} role="tab" onClick={()=> setActive(i)} />
        ))}
      </div>
      <button className="btn btn-primary">Create an Account</button>
    </Section>
  );
}
