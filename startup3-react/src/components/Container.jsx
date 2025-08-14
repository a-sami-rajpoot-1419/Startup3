export function Container({ as: Element = 'div', className = '', children, ...rest }) {
  return <Element className={`container ${className}`.trim()} {...rest}>{children}</Element>;
}

export function Section({ as: Element = 'section', id, className = '', children, ...rest }) {
  return (
    <Element id={id} className={`${className} site-section`.trim()} {...rest}>
      {children}
    </Element>
  );
}
