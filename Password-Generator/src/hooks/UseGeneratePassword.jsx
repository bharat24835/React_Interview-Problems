    import { useState } from "react";

    const usePasswordGenerator = ()=>{
        const[password  , setPassword] = useState();
        const[error ,setError] = useState();

        const generatePassword = (checkbox , length)=>{
            let charSet = "";
            let generatedPassword = "";

            const selectedOption = checkbox.filter((check)=>check.status);
            if(selectedOption.length == 0){
                setError("Select at Least one Option");
                setPassword("");
                return;
            }

            selectedOption.forEach((option)=>{
                switch(option.operation){
                    case 'Include UpperCase Letters':
                        charSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                        break;
                    case 'Include LowerCase Letters' :
                        charSet+="abcdefghijklmnopqrstuvwxyz";
                        break;
                    case 'Include Numbers':
                        charSet+="0123456789";
                        break;
                    case 'Include Symbols':
                        charSet+="!@#$%^&*";
                        break;
                    default : break;
                }
            })

            for(let i = 0 ;i<length ; i++){
                const randomIndex = Math.floor(Math.random()*charSet.length);
                generatedPassword+=charSet[randomIndex];
            }

            setPassword(generatedPassword);
            setError("");
        }
        // above generatePassoword closes
        




        return {password , error , generatePassword};

    };

    export default usePasswordGenerator;