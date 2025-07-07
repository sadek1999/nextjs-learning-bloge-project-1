import React from 'react'

export default async function review({params}:{params:Promise<{blogs:string,reviewId:string}>}) {
    const reviewId= (await params).reviewId;

  return (
    <div>Detail review {reviewId} </div>
  )
}
