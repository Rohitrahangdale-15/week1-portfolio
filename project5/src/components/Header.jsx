function Header(props) {
  return (
    <header>
      <h1>My Store 🛒 Cart: {props.count}</h1>
    </header>
  );
}

export default Header;