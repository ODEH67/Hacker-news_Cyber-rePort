import { IoMdArrowDropup } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import CreatedAt from "./CreatedAt";
import GetHostName from "./GetHostName";

//we have to write a function to get the X hours ago number from the timestamp

function PostHighlight({posts}) {

   //( new Date() - new Date(post.created_at_i * 1000) ) / (1000 * 60 * 60)
   const now = new Date()
   let postDate 

    
    return (
        <>
         {
            posts.map((post, idx)=> {
                if(post.title || post.story_title) {

                    return (
											<div className="post-div" key={uuidv4()}>
												<div className="number-upvote">
													{idx + 1}.
													<IoMdArrowDropup className="arrow-up" />
												</div>
												<div className="highlights">
													<div className="first-line">
														<span className="title">
															<a href={post.url}>{post.title}</a>
														</span>
														<span className="small-text"> ({GetHostName(post.url)})</span>
													</div>
													<div className="second-line">
														<span className="small-text">
															{post.points} points
														</span>
														<span className="small-text">
															{" "}
															by {post.author}
														</span>{" "}
														<span> </span>
														<span className="small-text">
															{CreatedAt(post.created_at_i)}
														</span>
														<span className="small-text"> hide |</span>
														<span className="small-text">
															{" "}
															{post.num_comments} comments
														</span>
													</div>
												</div>
											</div>
										);
                }
            })
         }
         </>
		);
}

export default PostHighlight;