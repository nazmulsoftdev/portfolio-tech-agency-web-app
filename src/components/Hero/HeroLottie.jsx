import { useLottie } from "lottie-react";
import heroLottieRun from "../../assets/lottie/Herosection.json";

const style = {
  width: "100%",
  height: 600,
};

const HeroLottie = () => {
  const options = {
    animationData: heroLottieRun,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default HeroLottie;
