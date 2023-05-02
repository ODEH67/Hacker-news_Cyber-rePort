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
															<a href={post.url} target="_blank" rel="noreferrer">{post.title}</a>
														</span>
														{/* line 34, I made the link klickable ,and to be opened in a blank page(this also in line 30), the link underline is removed in App.css on line 60 by adding text-decoration: none, just like the original website */}
														<a href={post.url} className="small-text" target="_blank" rel="noreferrer"> ({GetHostName(post.url)})</a>
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