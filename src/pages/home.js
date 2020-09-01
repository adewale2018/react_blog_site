import React from 'react';


import trending from '../assets/mocks/trending';
import featured from '../assets/mocks/featured';
import PostMonsory from './../components/common/PostMonsory';
import MasonryPost from './../components/common/MasonryPost';

const trendingConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3'
  }
}

const featuredConfig = {
0: {
  gridArea: '1 / 1 / 2 /3',
  height: '300px'
},
1: {
  height: '300px'
},
3: {
  height: '630px',
  width: '630px',
  marginLeft: '30px'
}
}

const mergeStyles = function(posts, config){
  posts.forEach((post, index) => {
    post.style= config[index]
  })
}

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

function home() {
  return (
    <section className='container home'>
      <div className="row">
      <h1>Featured Posts</h1>
      <section className='featured-posts-container'>
      <PostMonsory posts={featured} columns={2} tagsOnTop={true} />
      <MasonryPost post={lastFeatured} tagsOnTop={true} />
      </section>
        <h1>Treading Posts</h1>
        <PostMonsory posts={trending} columns={3} />
      </div>
    </section>
  )
}

export default home
