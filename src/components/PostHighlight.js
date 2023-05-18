import { BsDot } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import CreatedAt from "./CreatedAt";
import GetHostName from "./GetHostName";
import { useContext } from "react";
import {SearchContext} from "../context/SearchContext";
const parse = require("html-react-parser");

//we have to write a function to get the X hours ago number from the timestamp

function PostHighlight() {

const { hits, page, query } = useContext(SearchContext)
console.log("hits",hits)

    return (
        <>
		{hits.length === 0 ? <h2 className="no-result">Sorry, nothing matches this query</h2> : null}
        {
            hits.map((post, idx)=> {
                if(post.title || post.story_title || post.comment_text) {
					// console.log("comment",post.comment_text)
                    return (
											<div className="post-div" key={uuidv4()}>
												<div className="number-upvote">
													{page * 30 + idx + 1}.
													<BsDot className="arrow-up" />
												</div>
												<div className="highlights">
													<div className="first-line">
														<span className="title">
															<a
																href={post.url ? post.url : post.story_url}
																target="_blank"
																rel="noreferrer">
																{/* replaced the post.title after the question mark ? with the div below (removed the replacment , now it like before without marking*/}
																{post.title ? post.title : post.story_title}
																{/* {post.title ? <div dangerouslySetInnerHTML={{ __html: post.title }} />  : post.story_title}  */}
																{post.comment_text && parse(post.comment_text)}
															</a>
														</span>
														{/* line 34, I made the link klickable ,and to be opened in a blank page(this also in line 30), the link underline is removed in App.css on line 60 by adding text-decoration: none, just like the original website */}
														<a
															href={post.url ? post.url : post.story_url}
															className="small-text"
															target="_blank"
															rel="noreferrer">
															{" "}
															(
															{GetHostName(post.url)
																? GetHostName(post.url)
																: GetHostName(post.story_url)}
															)
														</a>
													</div>
													<div className="second-line">
														{post.points ? (
															<span className="small-text">
																{post.points} points
															</span>
														) : null}
														<span className="small-text">
															{" "}
															by {post.author}
														</span>{" "}
														<span> </span>
														<span className="small-text">
															{CreatedAt(post.created_at_i)}
														</span>
														<span className="small-text"> hide |</span>
														{post.num_comments ? (
															<span className="small-text">
																{" "}
																{post.num_comments} comments
															</span>
														) : (
															<span className="small-text"> 0 comments</span>
														)}
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