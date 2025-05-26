export default function Button({variant}:{ variant: string }) {
  
  //button style propp
  let color;
  
  switch (`${variant}`) {
    case "default":
      color = "#587557";
      break;
    case "danger":
      color = "#E01541";
      break;
    default:
      color = "#FF00FF" //if error show bright magenta
  }

  //button usage prop
  
  return <button className={`w-[5rem] h-[2rem] bg-[${color}]`}></button>;
}
