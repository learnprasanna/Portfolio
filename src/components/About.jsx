import {ABOUT_TEXT} from "../constants";

const About = () => {
    return (
        <div className="flex flex-col items-center border-b border-neutral-900 pb-4">
  <span
      className="my-10 text-center text-4xl">
    About me
  </span>
            <p className="my-2 w-full py-6 font-light text-center">
                {ABOUT_TEXT}
            </p>
        </div>


    )
}

export default About;