import Post from '../../components/post/Post'
import './homepage.css'

const Homepage = ()=>{
    return (
        <div className='homepage'>
            <h1>Listings</h1>
            <Post name='Michel' description='Make fullstack website with Python and Javascript.' title='Make Website' skills={['Python','Javascript']} date='2022/12/28' />
            <Post name='John' description="Improve your website design to be more user-friendly." title ='Design Website' skills={['Design','CSS']} date='2022/12/29' />
        </div>
    )
}

export default Homepage;