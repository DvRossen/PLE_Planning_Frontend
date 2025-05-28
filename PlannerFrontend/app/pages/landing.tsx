import Header from "~/components/header"
import Button from "~/components/button"
import SubjectList from "~/components/subject-list";

export default function Landing() {
    return(
        
        <div className="size-svw">
        <Header />
        <div className="flex h-max">
        <SubjectList />
        <div className="flex justify-center ">
        <h1 className="text-red-400">Hello</h1>
        
            <Button
            usage= "test"
            variant = "danger" 
            text= "danger"/>

            <Button
            usage= "test"
            variant = "default" 
            text = "default"/>
    
            <Button
            usage= "gibberish"
            variant = "gibberish"
            text= "gibberish" />
        
        </div>
        </div>
            </div>
            
    );
}
