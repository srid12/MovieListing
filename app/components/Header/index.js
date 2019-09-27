import React from 'react';



function Header() {
  return (
    <div>
      <span>Discover</span>
      <button type="button">Popular</button>
      <button type="button">Trends</button>
      <button type="button">Newest</button>
      <button type="button">TopRated</button>
      {/* <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar> */}
    </div>
  );
}

export default Header;
