import Button from "./button";

export default function Header() {
  return (
    <div style={{
    width: "100vw", height: "100px", padding:"8px", 
    display: "flex", justifyContent: "space-between", alignItems: "center", 
    backgroundColor: "#B7ADCF"}}>
      <Button
      variant = "danger" 
      text= "danger"/>

      <Button
      variant = "default" 
      text = "default"/>
    
      <Button
      variant = "gibberish"
      text= "gibberish" />

    </div>
  );
}
