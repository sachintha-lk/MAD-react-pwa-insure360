import { Link } from "react-router-dom";
import Button from "../components/Button";
import backgroundImage from "./../../public/images/background-image.jpg";
import roadImage from "./../../public/images/road.jpg";

function Home() {
  return (
    <div className="relative h-screen">
      <div className="container mx-auto h-full items-center justify-center md:w-10/12">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60 md:bg-right "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <div className="to white absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-white/30 to-white md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent"></div>

        <section className="absolute z-10">
          <div className=" max-w-screen-xl px-4 py-32  lg:h-screen lg:items-center">
            <div className=" max-w-xl text-center sm:text-left">
              <h1 className="text-center text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-left md:text-gray-800">
                <div className="-mt-5 mb-8 sm:mb-0 md:mt-0">
                  Get the Protection You Need on the Road !
                </div>
                <div className="block h-28 sm:hidden" />
                <strong className="mt-3 block text-5xl font-extrabold text-blue-800 md:text-5xl">
                  Your <span className="underline">Safety</span> <br /> Our
                  <span className="underline"> Priority!</span>
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Protecting You on Every Journey.
                <br /> Get peace of mind with Insure 360
              </p>

              <div className="col-span-1 flex flex-wrap justify-center gap-4 md:justify-start">
                <Link to="/signup">
                  <Button>Get Started</Button>
                </Link>
                <Button
                  variant="secondary"
                  className="border-solid border-gray-600"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto mt-10 grid w-10/12 grid-cols-1 gap-4 md:grid-cols-4">
        <div
          className=" w-full max-w-3xl transform cursor-pointer rounded-xl bg-cover bg-center p-10 text-gray-100 duration-500 hover:-translate-y-1 xl:col-span-2"
          style={{
            backgroundImage: `url(${roadImage})`,
          }}
        >
          <h1 className="min-h-33 mt-5 text-4xl leading-snug  text-gray-100">
            Protecting What Matters Most, Since 1999
          </h1>
        </div>

        <div
          className="w-full max-w-3xl transform cursor-pointer rounded-xl bg-cover bg-center p-10 text-gray-100 duration-500 hover:-translate-y-1 xl:col-span-2"
          style={{
            backgroundImage: `url(${roadImage})`,
          }}
        >
          <h1 className="min-h-33 mt-5 text-4xl leading-snug  text-gray-100">
            24/7 support, because emergencies don't stick to a schedule
          </h1>
        </div>

        <div
          className=" w-full max-w-3xl transform cursor-pointer rounded-xl bg-cover bg-center p-10 text-gray-100 duration-500 hover:-translate-y-1 xl:col-span-2"
          style={{
            backgroundImage: `url(${roadImage})`,
          }}
        >
          <h1 className="min-h-33 mt-5 text-4xl leading-snug  text-gray-100">
            Tailored coverage options to suit your unique needs and budget.
          </h1>
        </div>

        <div
          className=" w-full max-w-3xl transform cursor-pointer rounded-xl bg-cover bg-center p-10 text-gray-100 duration-500 hover:-translate-y-1 xl:col-span-2"
          style={{
            backgroundImage: `url(${roadImage})`,
          }}
        >
          <h1 className="min-h-33 mt-5 text-4xl leading-snug  text-gray-100">
            Affordable rates, because insurance should protect your wallet too.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
