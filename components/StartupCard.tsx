import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const { _createdAt, views, author: {_id, name }, description, image, title } = post;
  return (
      <li className='startup-card group'>
          <div className='flex-between'>
              <p className='starup_card_date'>
              {formatDate(post._createdAt)};
              </p>
              <div className='flex gap- 1.5'>
                  <EyeIcon className='size-6 text -primary'/>
               <span className="text-6 text-primairy">{post.views}</span>
              </div>
      </div>
        
          <div className='flex-between mt5 gap5'>
              <div className='flex-1'>
                  <Link href={`/user/${post.author?._id}`} />
                  <p className='text-16-medium line-clamp-1'>
                      {post.author? post.name : ""}
                  </p>
                  
              </div>
          </div>
          

    </li>
  )
}

export default StartupCard
