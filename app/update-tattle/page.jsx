'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from "@components/Form"


const EditTattle = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const tattleId = searchParams.get('id');


    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        tattle: "",
        tag: "",
    });
    useEffect(() => {
        const getTattleDetails = async () => {
            const response = await fetch(`/api/tattle/${tattleId}`);
            const data = await response.json();
            setPost({
                tattle: data.tattle,
                tag: data.tag,
            });
        }
        if (tattleId) getTattleDetails();
    },[tattleId])

    const updateTattle = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        if(!tattleId) return alert("Tattle ID not found");
        try {
            const response = await fetch(`/api/tattle/${tattleId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    tattle: post.tattle,
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
            setSubmitting(false);
        }

    }

    return (
        <Form
            type='Edit'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updateTattle}>
        </Form>
    )
}

export default EditTattle