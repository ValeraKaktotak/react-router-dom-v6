import{ Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div>
      <h1>Notfound</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit a
        dignissimos id at nisi provident! <Link to="/">home</Link>
      </p>
    </div>
  );
};
