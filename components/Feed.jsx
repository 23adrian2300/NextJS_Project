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

    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('api/tattle');
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    },[]);


    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, "i"); 
        return posts.filter(
          (item) =>
            regex.test(item.creator.username) ||
            regex.test(item.tag) ||
            regex.test(item.tattle)
        );
      };
    
      const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);
    
        setSearchTimeout(
          setTimeout(() => {
            const searchResult = filterPrompts(e.target.value);
            setSearchResults(searchResult);
          }, 500)
        );
      };
    
      const handleTagClick = (tagName) => {
        setSearchText(tagName);
        const searchResult = filterPrompts(tagName);
        setSearchResults(searchResult);
      };


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
            {searchText ? (
                <TattleCardList
                data={searchResults}
                handleTagClick={handleTagClick}> 
                </TattleCardList>) :
            (<TattleCardList data={posts} handleTagClick={handleTagClick}></TattleCardList>)}




        </section>
    )
}

export default Feed