import Header from "../components/header"
import Button from "../components/button"

export default function Landing() {
    return(
        
        <div>
        <Header />
        
        <div className="flex-3 justify-center gap-10px">    
        
        <h1 className="text-red-400">Hello</h1>
        
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
            </div>
            
    );
}
