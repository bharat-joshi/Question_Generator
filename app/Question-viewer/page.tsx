
import React from 'react';


const QuestionViewer = ({ questions }) => {

    return (
 
        <div className='flex flex-col gap-5 py-10 pr-5'>
        {
            questions.map((item, index) => (
                <div key={index}>{item.question}
                        {item.options.map((optionitem, index) => (
                            <div className='flex gap-3'>
                           <span>({optionitem.option})</span> <div key={index}>{optionitem.text}</div>
                           </div>
                        ))}
                </div>
            ))
        }
</div>
    );
}

export default QuestionViewer;