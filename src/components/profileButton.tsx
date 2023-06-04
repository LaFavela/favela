export default function ProfileButton(
    props: any = { transparent: false }
) {
    let textColor = "text-black ";
    if (props.transparent) {
        textColor = "text-white ";
    }
  return (
    <div>
      <div className="flex items-center space-x-4">
        <img
          src="assets/profile/avatar.jpg"
          alt=""
          className="aspect-square w-14 rounded-full"
        ></img>
        <div>
          <p className={"text-[1.3125rem] font-light " + textColor}>Ramadhani</p>
        </div>
      </div>
    </div>
  );
}
