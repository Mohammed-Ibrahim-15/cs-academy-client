import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-secondary my-3 fst-italic fs-1'>Our Blog</h1>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title className='text-primary'>What is CORS?</Card.Title>
                        <Card.Text>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className='text-primary'>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                        <Card.Text>
                            Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                            <br />
                            <br />
                            The best free alternative to Firebase is MongoDB. If that doesn't suit you, our users have ranked more than 50 alternatives to Firebase and loads of them is free so hopefully you can find a suitable replacement. Other interesting free alternatives to Firebase are Supabase, RxDB, Etebase and remoteStorage.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className='text-primary'> How does the private route work?</Card.Title>
                        <Card.Text>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                            If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className='text-primary'> What is Node? How does Node work?</Card.Title>
                        <Card.Text>
                            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                            <br />
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Blog;