function ButtonLink({ link, name, style }) {
  return (
    <a href={link} className={`${style}`}>
      {name}
    </a>
  );
}

export default ButtonLink;
