'use client'
import { useState} from 'react'
import Image from 'next/image'
import {useSession} from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const TattleCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
    const [copied, setCopied] = useState("");

    const handleCopy = () => {
        setCopied(post.tattle);
        navigator.clipboard.writeText(post.tattle);
        setTimeout(() => {
           setCopied(""); 
        }, 4000);
    }

  return (
    <div className='tattle_card'>
        <div className='flex justify-between items-start gap-5'>
            <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                <Image
                alt= "user_image"
                width={30}
                height={30}
                className='rounded-full object-contain'
                src={post.creator.image}
                >
                </Image>
                <div className='flex flex-col'>
                    <h3 className='font-satoshi font-semibold text-gray-900'>
                        {post.creator.username}
                    </h3>
                    <p className='font-inter text-sm text-gray-500'>
                        {post.creator.email}
                    </p>
                </div>
            </div>
            <div className='copy_btn' onClick={handleCopy}>
                <Image
                src = {copied === post.tattle ? 'assets/tick.svg'
            : 'assets/copy.svg'}
            width={15}
            height={15}></Image>
            </div>
        </div>
        <p className='my-4 font-satoshi text-sm text-gray-700'>{post.tattle}</p>
        <p className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick (post.tag)}>{post.tag}</p>
    </div>
  )
}

export default TattleCard