import React from 'react';

const PostItem = (props) => {

    return (
        <div className="process">
            <div className="process__content">
                <strong>{props.process.id}.</strong>
                <ProcessSettings>
                    {props.process.settings}
                </ProcessSettings>
            </div>
            <div className="process__start">
                <button onClick={() => }>
                    START
                </button>
            </div>
            <ProcessProgress className="process__progress">

            </ProcessProgress>
        </div>
    );
};

export default PostItem;