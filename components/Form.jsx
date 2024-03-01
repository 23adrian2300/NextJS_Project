import React from 'react'
import Link from 'next/link'


const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Post </span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} and share your gossip with the world and let others know what is going on.
            </p>


            <form
                onSubmit={handleSubmit}
                className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
            >
                <lable>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your tattle
                    </span>
                    <textarea
                        value={post.tattle}
                        onChange={(e) => setPost({ ...post, tattle: e.target.value })}
                        placeholder='Write your tattle' required
                        className='form_textarea'></textarea>

                </lable>
                <lable>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Tag {' '}
                        <span className='font-normal'> (#rumor, #lie, #omg)</span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        placeholder='#tag' required
                        className='form_input'></input>

                </lable>

                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href="/" className='text-gray-500 text-sm'>Cancel</Link>
                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm rounded-full text-white bg-blue-700'> {submitting ? `${type}...` : type}</button>
                </div>


            </form>

        </section>
    )
}

export default Form