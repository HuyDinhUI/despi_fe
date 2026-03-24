import Chatbox from "@/src/components/chatbox";

export default function CurrentConsulatorPage () {
    return (
        <div className="flex-1 flex">
            <div className="flex-1 bg-gray-50">
                <Chatbox/>
            </div>
            <div className="w-80 border-l border-gray-200 h-[92vh]"></div>
        </div>
    )
}