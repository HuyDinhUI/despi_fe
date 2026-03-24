"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "../ui/button"

export default function Chatbox () {
    return (
        <div className="relative h-full p-10">
            {/* Message */}
            <div>
                
            </div>
            {/* Input */}
            <div className="absolute bottom-0 right-0 left-0 p-5">
                <div className=" p-2 ring ring-gray-300 shadow rounded-full flex">
                    <input name="message-client" className="flex-1 outline-none px-2" placeholder="Speak your intention to the void..."/>
                    <Button variant="icon" size="ic" className="bg-black" icon={<ArrowUp size={15} color="white" />}/>
                </div>
            </div>
        </div>
    )
}