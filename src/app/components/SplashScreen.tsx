import livestockIconImg from "../../imports/livestock_icons/livestock_logo.png";

export function SplashScreen() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <img
        src={livestockIconImg}
        alt="LiveStock"
        className="w-36 h-auto object-contain"
      />
    </div>
  );
}
