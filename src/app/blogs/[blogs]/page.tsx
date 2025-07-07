
import React from 'react'

export default async function blog({params}:{params:Promise<{blogs:string}>}) {
  const blog=  (await params).blogs;
  return (
    <div> Detail about blog {blog}</div>
  )
}
