'use client'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from "@components/Form"


const CreateTattle = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        tattle: "",
        tag: "",
    })

    const createTattle = async (e) => {
        e.prevendDefault();

        setSubmitting(true);

        try {
            const response = await fetch('/api/tattle/new', {
                method: 'POST',
                body: JSON.stringify({
                    tattle: post.tattle,
                    userId: session?.user.id,
                    tag: post.tag
                }),
            })
            if (response.ok) {
                router.push('/');
            }
        }

        catch (error) {
        console.log(error);
    }
        finally {
            setSubmitting(false);}

}

return (
    <Form
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createTattle}></Form>
)
}

export default CreateTattle