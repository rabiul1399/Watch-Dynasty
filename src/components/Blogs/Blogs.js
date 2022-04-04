import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs'>
            <h1>This is Question Part</h1>
            <div>
                <h2>What is Context Api?</h2>
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div>
                <h2>What is the semantic tag?</h2>
                <p>
                    Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                    On the flip side of this equation, tags such as and are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.
                </p>
                <p>
                    Examples of semantic HTML tags include:

                    Header tags  h1 through h6
                        blockquote tag
                        p tag etc

                        </p>
                    </div>
                    <div>
                        <h2>What is the inline-block element?</h2>
                        <p>
                        Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You’ll have to declare display: inline-block in your CSS code.
                         One common use for using inline-block is for creating navigation links horizontally.
                        </p>
                    </div>

                    </div>
                    );
};

                    export default Blogs;