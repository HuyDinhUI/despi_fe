import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { QuestionSuggest } from "@/src/@types/questionSuggest"

type props = {
    questionSuggest?: QuestionSuggest[]
}

const InputQuestionTarot = ({questionSuggest}: props) => {
    return (
        <div className="bg-gray-100 ring ring-gray-300 w-[min(500px,90vw)] p-5 mt-10">
            <div className="flex">
                <input className="flex-1 outline-none" name="question" placeholder="Enter question"></input>
                <Button variant="icon" size="ic" icon={<ChevronRight size={15}/>}/>
            </div>
            <div className="flex items-center gap-5">

            </div>
        </div>
    )
}

export default InputQuestionTarot