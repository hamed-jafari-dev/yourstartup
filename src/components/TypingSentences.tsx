import React from 'react';
import Typewriter from "typewriter-effect";

const TypingSentences:React.FC<{ text: string, text2?: string }> = ({text, text2=""}) => {
    return (
        <div className="App">
            {
                text2 === "" ?
                <Typewriter
                    options={{loop:true}}
                    onInit={(typewriter)=> {
                        typewriter
                            .typeString(text)
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                />
                :
                    <Typewriter
                        options={{loop:true}}
                        onInit={(typewriter)=> {
                            typewriter
                                .typeString(text)
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString(text2)
                                .start();
                        }}
                    />
            }
        </div>
    )
}

export default TypingSentences;
