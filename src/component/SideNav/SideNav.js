import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SideNav = ({ courses }) => {

    return (
        <div className='border border-3 bg-light p-3 rounded-3'>
            <h2>All Course Title</h2>
            {
                courses.map(c => <Link to={`/course/${c.course_id}`}><Button className='mb-2' variant="outline-dark" key={c.course_id}>{c.course_title}</Button></Link>)
            }
        </div>
    );
};

export default SideNav;