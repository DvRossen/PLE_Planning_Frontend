export default function Button({variant, text}:{ variant: string, text: string}) {
  
  //button style prop
 
    let color;
    switch (`${variant}`) {
    case "default":
      color = "bg-default";
      break;
    case "danger":
      color = "bg-danger";
      break;
    default:
      color = "bg-error" //if prop not defined properly show bright magenta
  }
  

  //button usage prop
function clickhandler() {
  console.log(`you've clicked ${text}`)}

  return <button className={`w-[18rem] h-[3em] ${color} hover:saturate-300 rounded-xl cursor-pointer`} onClick={clickhandler}>{text}</button>;
}
