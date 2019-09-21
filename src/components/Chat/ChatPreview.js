import React, {Component} from 'react';
import styles from './ChatPreview.module.css';
import simpleIcon from '../../res/simple_icon.png';

class ChatPreview extends Component {
    render() {
        const {preview}= this.props;
        return (
            <div className={styles.wrapper}>
                <img src={preview.profile? preview.profile: simpleIcon} alt="" className={styles.thumbnail}/>
                <div className={styles.desc}>
                    <p className={styles.name}>{preview.name}</p>
                    <p className={styles.content}>{preview.content}</p>
                </div>
                {
                    preview.notRead? <span className={styles.bedge}>{preview.notRead}</span> : ''
                }
            </div>
        );
    }
}

export default ChatPreview;