import React from 'react';
import { Youtubedata } from '../../Youtubedata';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (a) => {
    return (
        <div className="youtubelist">
        {a.children}
        {
            Youtubedata.map((item,index) => {
                return( 
                <YoutubeItem
                    id={item.id}
                    thumnail1={item.thumnail}
                    title1={item.title}
                    author1={item.author}
                    avatar1={item.avatar}>
            
                </YoutubeItem>
                );
           
            }
            )
        }
    </div>
    );
};

export default YoutubeList;