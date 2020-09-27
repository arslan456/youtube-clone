import TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined';
import React from 'react';
import ChannelRow from './ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Mosh Hamedani"
            verified
            subs="1.3M"
            noOfVideos={154}
            description="I train professional software engineers that companies love to hire."
            />
            <hr/>
            <VideoRow
              views="1.4M"
              subs="1.2M"
              description="Do you want a Free one hour training"
              timestamp="59 secons ago"
              channel="Mosh Hamedani"
              title="Let's build a Youtube clone"
              image="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s176-c-k-c0x00ffffff-no-rj-mo"
            />
            <VideoRow
              views="1.4M"
              subs="1.2M"
              description="Do you want a Free one hour training"
              timestamp="59 secons ago"
              channel="Mosh Hamedani"
              title="Let's build a Youtube clone"
              image="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s176-c-k-c0x00ffffff-no-rj-mo"
            />
            <VideoRow
              views="1.4M"
              subs="1.2M"
              description="Do you want a Free one hour training"
              timestamp="59 secons ago"
              channel="Mosh Hamedani"
              title="Let's build a Youtube clone"
              image="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s176-c-k-c0x00ffffff-no-rj-mo"
            />
            <VideoRow
              views="1.4M"
              subs="1.2M"
              description="Do you want a Free one hour training"
              timestamp="59 secons ago"
              channel="Mosh Hamedani"
              title="Let's build a Youtube clone"
              image="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s176-c-k-c0x00ffffff-no-rj-mo"
            />
        </div>
    )
}

export default SearchPage
