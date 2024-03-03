'use client'
import { useEffect, useState } from 'react'
import TattleCard from './TattleCard'


const TattleCardList = ({data, handleTagClick}) => {
    return (
        <div className='mt-16 tattle_layout'>
            {data.map((post) => (
                <TattleCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}></TattleCard>
                
            ))}
        </div>
    )
}


const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([]);
    const handleSearchChange = (e) => {

    }

    useEffect(() => {
            const fetchPosts = async () => {
                const response = await fetch('api/tattle');
                const data = await response.json();
                setPosts(data);
            }
            fetchPosts();
    },[]);

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                ></input>
            </form>
            <TattleCardList
                data={posts}
                handleTagClick={() => { }}
            ></TattleCardList>


        </section>
    )
}

export default Feed