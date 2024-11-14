import React, {useState, useEffect} from "react";
import { motion } from "framer-motion"
import Post from "../Post/Post";
import PostLoading from "../Post/PostLoading";
import { useDispatch, useSelector } from "react-redux";
import { startGetPosts, fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from "../../app/redditSlice";
import getRandomNumber from "../../utils/getRandomNumber";

const Home = () => {
    const reddit = useSelector((state) => state.reddit); // Empty object as default
    const {isLoading, error, searchTerm, selectedSubreddit} = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(startGetPosts());
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]); 

  /*    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
      }, [selectedSubreddit]);
 
 */
      
  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };

    return getComments;
  };

    const AnimatedList = ({ animation = 'zoom' }) => { // Set default animation
        const [items, setItems] = useState([]);
      
        useEffect(() => {        
          const newItems = Array(getRandomNumber(3, 10)).fill(<PostLoading />);
          setItems(newItems);
        }, []);
      
        const variants = {
          zoom: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }, // Customize duration as needed
          },
        };
      
        return (
          isLoading ? ( // Conditional rendering based on isLoading
            <motion.ul variants={variants[animation]} animate="zoom">
              {items}
            </motion.ul>
          ) : (
            <div> {/* Display alternative content if not loading */} </div>
          )
        );
      };

    if(error){
        return(
            <div className="error">
                <h2>Failed to load posts</h2>
                <button type="button">
                    Try again
                </button>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
          <div className="error">
            <h2>No posts matching "{searchTerm}"</h2>
            <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
              Go home
            </button>
          </div>
        );
      }


    return(
        <>
            {posts.map((post, index) => (
                <Post 
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}
                />
            ))}
        </>
    )
}

export default Home;