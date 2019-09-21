import React, {Component} from 'react';
import classNames from "classnames";

class PageTitle extends Component {
    render() {
        const {title, explain, centering, noMargin}= this.props;

        return (
            <div>
                {!noMargin && (<div><br/><br/></div>)}
                <p className={classNames('title', {centering})}>{title}</p>
                {
                    explain? (<p className={classNames('explain', {centering})}>{explain}</p>): ''
                }
                {!noMargin && (<div><br/><br/></div>)}
                </div>
        );
    }
}

export default PageTitle;