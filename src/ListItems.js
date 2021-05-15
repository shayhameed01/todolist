import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import { flushSync } from 'react-dom';

function ListItems(props){
    const items = props.items
    const listItems = items.map(item => 
        {
            return <div className = "list" key = {item.key}>

                <p>{item.text}
                
                <span>
                    <FontAwesomeIcon className = "faicons"  onClick={() => {props.deleteItem(item.key)}} icon = "trash"/>
                </span>
                
                </p>
              
            </div>
        })
    return (
        <div> 
        <FlipMove duration = {300} easing = "ease-in-out">
         {listItems}
        </FlipMove>
         </div>
    )
}

export default ListItems 