import { Carousel } from "@material-tailwind/react";

export function Updates() {
  const UpdatesCss =
    "h-full flex justify-center items-center w-full rounded-xl bg-blue-gray-50 ";
  return (
    <div className=" h-100% ">
      <div id="Up" className="top-0">
        -
      </div>

      <div className=" mt-20 flex flex-row justify-center items-center">
        <Carousel
          autoplay={true}
          autoplayDelay={5000}
          transition={{ duration: 2 }}
          className="rounded-xl h-20 w-2/3 flex flex-row  "
          loop={true}
        >
          <div className={UpdatesCss}>
            webdev build login/signup Updates components
          </div>
          <div className={UpdatesCss}>Appdev started home page</div>
          <div className={UpdatesCss}>maine ML krlia impliment krlia</div>
          <div className={UpdatesCss}>mai backend ape krleuga💅💅</div>
        </Carousel>
      </div>
    </div>
  );
}
