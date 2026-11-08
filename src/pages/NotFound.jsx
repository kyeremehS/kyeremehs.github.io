import { Link } from "react-router-dom";
import { Reveal } from "../components/ui";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
      <Reveal>
        <span className="eyebrow justify-center flex">404</span>
        <h1 className="h1 mt-5">Page not found.</h1>
        <p className="lead mt-5 mx-auto">
          The page you're after doesn't exist — or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Back home
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contact me
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
