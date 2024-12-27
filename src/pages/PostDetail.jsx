import React from 'react'
import PostAuhtor from '../components/PostAuhtor'
import { Link } from 'react-router-dom'

function PostDetail() {
  return (
    <>
    <section className='post-detail '>
      <div className="container post-detail-container">
        <div className="post-detail-header">
          <PostAuhtor/>
          <div className="post-detail-buttom">
            <Link to={`/posts/werwer/edit`} className='btn-primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn-danger'>Delete</Link>
          </div>
        </div>

        <h1>This is the post title</h1>
        <div className="post-detail-thumbnail">
          <img src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=" alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa nobis esse tempora sint, minima aut! Id rerum fugit perferendis enim laboriosam repellat aliquid incidunt libero modi dolores. Hic, minima.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro maxime ipsum similique atque quaerat ratione excepturi ex quisquam odio, commodi expedita facilis qui. Nemo animi earum id ullam aliquid velit dolorem ex facere distinctio similique in sequi excepturi sed soluta aut, vitae labore ducimus accusamus illum est maxime ipsam. Molestiae iusto dignissimos voluptatum eveniet omnis deserunt! Error, nam laudantium! Necessitatibus, sed! Iste, vitae doloribus!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quo expedita enim, odio dicta quibusdam esse voluptatum vero assumenda a repellat rem, iure dolorem quod quam non perferendis voluptate accusantium?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus est iste animi placeat ad earum quae excepturi, ex ut velit temporibus provident sint quaerat impedit rerum odio nisi reprehenderit quos, accusamus, sunt facilis. Officia blanditiis repellat cumque excepturi minima sequi neque quaerat nostrum repudiandae quod, quos doloribus voluptatem itaque architecto quas? Dolore, placeat natus nulla itaque, ratione laudantium distinctio culpa atque consectetur praesentium necessitatibus et aut expedita aliquam consequuntur? Maxime maiores quo cupiditate corrupti deserunt qui autem. Excepturi, alias cupiditate. Nostrum quia quisquam quo ullam, recusandae placeat voluptates esse molestias, nisi, repudiandae exercitationem. Expedita rem rerum dignissimos nulla reprehenderit modi facilis, temporibus animi beatae, quod suscipit ipsum, minima nobis odit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae saepe culpa veritatis quibusdam maiores reiciendis modi, architecto quam dolores atque?</p>
      </div>
    </section>
    </>
  )
}

export default PostDetail
