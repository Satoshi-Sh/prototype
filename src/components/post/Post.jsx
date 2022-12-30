// code comes from https://react-bootstrap.github.io/components/cards/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './post.css'

function Post(props) {
  return (
    <Card>
      <Card.Header>
        Skills: 
        {props.skills.map((skill,i)=>{
          return <span className='skill' key={i}>{skill}</span>
        })}
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className='cardDiv'>
        <Button variant="primary" className=''>Read More</Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
      <div className='footer'><span>{props.date}</span><span>{"Posted by " + props.name}</span></div> 
      </Card.Footer>
    </Card>
  );
}

export default Post;