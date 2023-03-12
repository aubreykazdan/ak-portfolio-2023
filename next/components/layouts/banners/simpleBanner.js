import Container from "../container";

export default function simpleBanner({ title }) {
  return (
    <div className="py-8 sm:py-12 shadow">
      <Container>
        <div className="max-w-xl">
          <h1>{title}</h1>
        </div>
      </Container>
    </div>
  );
}
