import {useEffect, useState} from "react";
import "./Posts.css"
import axios from 'axios'
function Posts({options}) {

  function getPageCount(){
      return Math.ceil(options.count / options.limit);
  }
    const request = async (page) => {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${options.limit}&_page=${page}`)
            .then(res => res.data)
    }
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(() => {
        let pages = []
        for (let i = 1; i <= getPageCount(); i++) {
            pages.push(<li key={i} index={i} onClick={(e) => {
                setCurrentPage(i)
                document.querySelectorAll('li[index]').forEach(item => {
                   item.getAttribute('index') === e.target.getAttribute('index')
                    ? item.setAttribute('style', 'background: #ffc107') : item.setAttribute('style', 'background: lightskyblue')

                })
                

                
                request(i).then(res => {
                    setPosts(res)
                })
            }}>{i}</li>)
        }
        return pages
    });

    useEffect(() => {
         request(1).then(res => {
                setPosts(res)
            })
    }, [options.count, options.limit])

    

  return (
    <div className="posts">
        <div className="card">{posts.map((post, index) => <p>{index + 1} ------ {post.body}</p>)}</div>
        <ul className="t4">
            <li onClick={() =>{
                setCurrentPage(currentPage - 1 >= 0 ? currentPage - 1 : 1)
                currentPage - 1 >= 1 ? request(currentPage - 1).then(res => {
                    setPosts(res)
                    document.querySelectorAll('li[index]').forEach(item => {
                        item.getAttribute('index') == currentPage - 1 ? 
                        item.setAttribute('style', 'background: #ffc107') : item.setAttribute('style', 'background: lightskyblue')
                     })

                }) : request(1).then(res => {
                    setPosts(res)
                })
               
            }}> Previes </li>
            {pages}
            <li onClick={() => {
                setCurrentPage(currentPage + 1 <= getPageCount() ? currentPage + 1 : getPageCount())
                currentPage + 1 <= getPageCount() ? request(currentPage + 1).then(res => {
                    setPosts(res)
                    document.querySelectorAll('li[index]').forEach(item => {
                        item.getAttribute('index') == currentPage + 1 ? 
                        item.setAttribute('style', 'background: #ffc107') : item.setAttribute('style', 'background: lightskyblue')
                     })
                }) : request(getPageCount()).then(res => {
                    setPosts(res)
                })
            }}> Next </li>
        </ul>
        
    </div>

)}

export default Posts;