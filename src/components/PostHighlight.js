import { IoMdArrowDropup } from "react-icons/io";

//we have to write a function to get the X hours ago number from the timestamp

function PostHighlight({posts}) {
    
    return (
        <>
         {
            posts.map((post, idx)=> {
                return(

                    <div className="post-div">
                        <div className="number-upvote">
                            {idx +1 }.
                            <IoMdArrowDropup className="arrow-up"/>
                        </div>
                        <div className="highlights">
                            <div className="first-line">
                                <span className="title">{post.title}</span>
                                <span className="small-text"> ({post.url})</span>
                            </div>
                            <div className="second-line">
                                <span className="small-text">{post.points} points</span>
                                <span className="small-text"> by {post.author}</span>
                                <span className="small-text"> X hours ago |</span>
                                <span className="small-text"> hide |</span>
                                <span className="small-text"> {post.num_comments} comments</span>
                            </div>
                        </div>
                    </div>
                )
            })
         }
         </>
		);
}

export default PostHighlight;