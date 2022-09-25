import { useState } from 'react'
import { MarkdownStyled } from './Markdown.styled'
import ReactMarkdown from 'react-markdown'

export const Markdown = () => {
    const [markdown, setMarkdown] = useState('# Markdown ')
    return (
        <MarkdownStyled>
            <section className='markdown'>
                <textarea
                    className='input'
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                ></textarea>
                <article className='result'>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </article>
            </section>
        </MarkdownStyled>
    )
}
