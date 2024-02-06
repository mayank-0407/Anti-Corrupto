import { Carousel, Typography, Button } from "@material-tailwind/react";

export function Carousell() {
  const UpdatesCss = " flex justify-center items-center   opacity-100 ";
  return (
    <div className="h-[550px]">
      <Carousel className="rounded-xl">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 opa">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl flex flex-row"
              >
                Anti Corrupt
                <a className="ml-[-10] w-16 ">
                  <Carousel
                    prevArrow={false}
                    nextArrow={false}
                    navigation={false}
                    autoplay={true}
                    autoplayDelay={5000}
                    transition={{ duration: 2 }}
                    className="rounded-xl w-full flex flex-row overflow-hidden "
                    loop={true}
                  >
                    <div className={UpdatesCss}>- ō</div>
                    <div className={UpdatesCss}>🪙</div>
                    <div className={UpdatesCss}>₿</div>
                    <div className={UpdatesCss}>🌐</div>
                  </Carousel>
                </a>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                "Blockchain, like an unyielding fortress, secures the beauty of
                trust in the digital realm, where each block becomes a testament
                to the safety and transparency of our shared journey into the
                future."
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  <a href="https://www.blockchain.com/">Explore</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1559445368-b8a993676d7a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Digilocker
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                "Digilocker, where the essence of paperless convenience meets
                the security of a digital vault, unlocking a seamless journey
                for our documents, where accessibility meets tranquility in the
                digital landscape."
              </Typography>
              <div className="flex gap-2 ">
                <Button size="lg" color="white">
                  <a href="https://www.digilocker.gov.in/">Explore</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1495277493816-4c359911b7f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
