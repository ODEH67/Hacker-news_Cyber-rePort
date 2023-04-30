import { Link } from 'react-router-dom';
import "./odeh.css"

export default function Footer() {

    return (
        <footer>
            <hr className="footer_separator"/>
            <div className='footer_container'>
                <Link href="https://www.ycombinator.com/apply/">Applications are open for YC Summer 2023</Link>
                <br/>
                <span className="footer_links">
                    <Link to="#" >Guidelines</Link> | 
                    <Link to="#" >FAQ</Link> | 
                    <Link to="#" >Lists</Link> | 
                    <Link to="https://github.com/HackerNews/API" target="_blank">API</Link> | 
                    <Link to="#">Security</Link> | 
                    <Link to="https://www.ycombinator.com/legal/" target="_blank">Legal</Link> | 
                    <Link to="https://www.ycombinator.com/apply/" target="_blank">Apply to YC</Link> | 
                    <Link to="mailto:hn@ycombinator.com" target="_blank">Contact</Link>
                </span>
                <br/>
            </div>
        </footer>
    )
}