import React from 'react'
interface MarkdownProps {
    text: ({
        p?: string;
        h2?: string | undefined;
        ul?: string[] | undefined;
    })[];
}


const Markdown = ({ text }: MarkdownProps) => {
    return (
        <>
            {text.map((item, index) => (
                <>
                    {item.h2 && <h2 className="font-bold text-2xl pt-4 pb-2" key={`h2-${index}`}>{item.h2}</h2>}
                    {item.p && <p key={`p-${index}`}>{item.p}</p>}
                    {item.ul && (
                        <ul key={`ul-${index}`} className='list-disc px-4'>
                            {item.ul.map((li, liIndex) => (
                                <li key={`li-${liIndex}`} className='py-2'>{li}</li>
                            ))}
                        </ul>
                    )}
                </>
            ))}
        </>
    )
}

export default Markdown