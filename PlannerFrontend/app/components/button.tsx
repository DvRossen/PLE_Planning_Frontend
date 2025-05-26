export default function Button({variant, text}:{ variant: string, text: string}) {
  
  //button style prop
  let color;
  switch (`${variant}`) {
    case "default":
      color = "#587557";
      break;
    case "danger":
      color = "#E01541";
      break;
    default:
      color = "#FF00FF" //if prop not defined properly show bright magenta
  }

  //button usage prop
  
  // :(

  return <button style={{backgroundColor: color, width: "18rem", height: "3em", borderRadius:"15px" }}>{text}</button>;
}
