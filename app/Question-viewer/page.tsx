
"use client"

import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react'

//add new option
//delete existing otpion
const QuestionViewer = ({ questions }) => {


    const [isChecked, setChecked] = useState(false)
    const [updatedQuestions, setUpdateQuestions] = useState(questions);

    const updateQuestionText = (id, text) => {
        console.log(text)
        const questions = updatedQuestions.map((q) => {
            if (q.id == id) {
                return {
                    ...q,
                    question: text
                }
            }
            return q;
        });
        console.log(questions);
        setUpdateQuestions(questions);
    }

    const bindViewMode = () => {
        return (
            <div className='flex flex-col gap-5 py-10 pr-5'>
                {
                    updatedQuestions.map((item, index) => (
                        <div key={index} className='flex flex-col gap-5'>
                            <div className='flex gap-5 font-bold'>
                                <span>({index + 1})</span>{item.question}
                            </div>
                            {item.options.map((optionitem, chilindex) => (
                                <div className='flex gap-2 align-baseline' key={chilindex}>
                                    <span>({optionitem.option})</span> <div className='flex gap-5'>{optionitem.text}</div>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        )
    }

    const bindEditMode = () => {
        return (
            <div className='flex flex-col gap-10 py-10 pr-5'>
                {
                    updatedQuestions.map((item, index) => (
                        <div key={index} className='flex flex-col gap-10'>
                            <div className='flex gap-5'>
                                <span>({index + 1})</span> <Input value={item.question} onChange={(event) => updateQuestionText(item.id, event?.target.value)} />
                            </div>
                            {item.options.map((optionitem, chilindex) => (
                                <div className='flex gap-5 align-baseline' key={chilindex}>
                                    <span>({optionitem.option})</span> <div className='flex gap-5'>
                                        <Input value={optionitem.text} onChange={(value) => console.log(value)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        )
    }


    return (
        <div>
            <Switch checked={isChecked} onCheckedChange={(value) => setChecked(value)} />

            {isChecked ? bindEditMode() : bindViewMode()}

        </div>
    );
}

export default QuestionViewer;