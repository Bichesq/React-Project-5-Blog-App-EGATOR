import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
    return (
        <section className="post-detail">
            <div className="container post-detail__container">
                <div className="post-detail__header">
                    <PostAuthor />
                    <div className="post-detail__buttons">
                        <Link to={'/posts/werwer/edit'} className='btn sm primary'>Edit</Link>
                        <Link to={'/posts/werwer/delete'} className='btn sm danger'>Delete</Link>
                    </div>                    
                </div>
                <h1>This is the post title!</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail} alt='' />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente minima consectetur aperiam, obcaecati ipsum dolor repellat ratione, inventore, suscipit repellendus sed quasi cumque! Accusamus, ipsum? Iste, excepturi. Earum velit assumenda in mollitia laborum blanditiis cum, unde impedit corrupti! Harum quos perspiciatis distinctio tenetur cumque nemo aut doloremque dolores itaque sequi dicta, dolorum quam rem minima ipsam velit debitis animi possimus porro cum provident fugit! Natus eveniet perspiciatis, maxime vero mollitia alias voluptatibus inventore qui esse veritatis quae vel vitae id eligendi magnam voluptatem aperiam veniam neque nesciunt excepturi sit deleniti? Quibusdam magnam facere accusamus enim rem nesciunt architecto natus!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, aut nobis! Praesentium rem ipsum officiis explicabo quas, repellat consequatur optio ab laudantium quod natus! Id laborum porro doloremque natus ipsa suscipit debitis autem repellat qui! Ab deleniti temporibus delectus adipisci nam excepturi in, voluptatum sapiente dolore harum quaerat repellendus aspernatur inventore corporis quos! Perferendis quod quaerat incidunt dicta magni nihil illo. Sunt quos voluptatum molestias.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipii aliquid? Quo incidunt deserunt architecto?</p>
            </div>
        </section>
    )
}

export default PostDetail
