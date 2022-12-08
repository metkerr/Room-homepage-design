import bgImage_1 from "../images/image-about-dark.jpg";
import bgImage_2 from "../images/image-about-light.jpg";
export default function Main() {
  return (
    <main>
      <section className="sm:flex 2xl:h-30v">
        <div
          style={{
            backgroundImage: `url(${bgImage_1})`,
          }}
          className="h-56 bg-top bg-cover sm:w-384 sm:min-w-64 sm:h-72"
        />
        <div className="sm:min-w-128 sm:flex">
          <div id="about-container" className="mx-8 my-12 sm:my-auto">
            <h2 className="font-bold uppercase tracking-widest mb-2 sm:mb-3">
              About our furniture
            </h2>
            <p className="text-dark-gray">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImage_2})`,
          }}
          className="h-56 bg-top bg-cover sm:w-384 sm:min-w-64 sm:h-72"
        />
      </section>
    </main>
  );
}
